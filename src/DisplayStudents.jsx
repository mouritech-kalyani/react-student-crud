import { React, Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import Edit from './edit.png';
import Delete from './delete.png';

class DisplayStudents extends Component {
    constructor() {
        super();
        this.state = {
            listOfStudents: []
        }
    }
    componentDidMount() {
        axios.get('https://student-management-apis.herokuapp.com/students-information').then((res) => {

            this.setState({ listOfStudents: res.data });
            console.log(this.state.listOfStudents);
        })
    }


    editStudent(id,name,branch,year) {
        sessionStorage.setItem('id',id);
        sessionStorage.setItem('name',name);
        sessionStorage.setItem('branch',branch);
        sessionStorage.setItem('year',year);
        window.location = ('/edit-student');
    }


    deleteStudent(id) {
        swal.fire({
            "type":"warning",
            "title":"Are you sure want to delete this record",
            "showDenyButton": true,
            "showConfirmButton":true,
            "confirmButtonText": "Delete",
            "denyButtonText": "Cancel",
        }).then((result)=>{
            if(result.isConfirmed){
            axios.delete(`https://student-management-apis.herokuapp.com/students-information/${id}`).then(()=>{
                swal.fire({
                    "type":"warning",
                    "text":"Your record been deleted!"
                }).then(()=>{
                    window.location.reload();
                })
            })
        }
        else if(result.isDenied){
            swal.fire({
                "type":"warning",
                "title":"Your record is safe",
                "buttons": true
            }).then(()=>{})
        }
        })
        
                    
                            
    }

    backToDashboard() {
        window.location = ('./');
    }
    render() {
        return (
            <div id="studentTab">
                <a href="./" id="backBtn">Back to Dashboard</a>
                <table>
                    <tr>
                        <th>PRN Number</th>
                        <th>Student Name</th>
                        <th>Branch</th>
                        <th>Year</th>
                        <th>Action</th>
                    </tr>
                    {
                        this.state.listOfStudents.map((std) => {
                            return <tr>
                                <td key={std.id}>{std.id}</td>
                                <td key={std.id}>{std.name}</td>
                                <td key={std.id}>{std.branch}</td>
                                <td key={std.id}>{std.year}</td>
                                <td key={std.id}>
                                    <img src={Edit} id="editStd" onClick={() => this.editStudent(std.id,std.name,std.branch,std.year)} alt='edit' />
                                    <img src={Delete} id="deleteStd" onClick={() => this.deleteStudent(std.id)} alt='delete' />
                                </td>
                            </tr>

                        })

                    }

                </table>


            </div>
        )
    }
}
export default DisplayStudents;
;