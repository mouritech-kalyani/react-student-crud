import { React, Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            id:'',
            branch:'',
            year:''
        }
        this.getName = this.getName.bind(this);
        this.getBranch = this.getBranch.bind(this);
        this.getStdYear = this.getStdYear.bind(this);
        this.editStudent=this.editStudent.bind(this);
    }

getName(e){
 this.setState({
     name:e.target.value
 })   
}

getBranch(e){
    this.setState({
        branch:e.target.value
    })   
   }

getStdYear(e){
    this.setState({
        year:e.target.value
    })   
   }

editStudent(){
    if(this.state.name === '' || this.state.name === undefined || this.state.name === null)
    {
        swal.fire({
            "type":"error",
            "text":"Please Enter all fields"
        }).then(()=>{

        })
    }
    else if(this.state.branch === '' || this.state.branch === undefined || this.state.branch === null){
        swal.fire({
            "type":"error",
            "text":"Please Enter all fields"
        }).then(()=>{

        })
    }
    else if(this.state.year === '' || this.state.year === undefined || this.state.year === null){
        swal.fire({
            "type":"error",
            "text":"Please Enter all fields"
        }).then(()=>{

        })
    }
    else{
        sessionStorage.setItem('updatedName',this.state.name);
        sessionStorage.setItem('updatedBranch',this.state.branch);
        sessionStorage.setItem('updatedYear',this.state.year);

        axios({
            method: 'put',
            url: 'https://student-management-apis.herokuapp.com/students-information',
            data: {
                id:sessionStorage.getItem('id'),
              name: this.state.name,
              branch: this.state.branch,
              year: this.state.year
            }
          }).then((res)=>
          {
            if(res){
                swal.fire({
                    "type":"success",
                    "title":"Record updated successfully",
                    "buttons": true,
                }).then(()=>{
                    window.location=('./display-students');
                    console.log('Entered Data is',res)
                })
            } 
          }
          )
    }
    
}
    render() {
        const id= sessionStorage.getItem('id');

        return (
            <div>
                 <div id="addForm" contenteditable="true">
                   <h2>Add Student</h2>
                   <table id="addFormTab">
                   <tr>
                   <td>PRN Number</td>
                   <td><input type="text" name="name" id="name" readOnly value={id} /></td>
                   </tr>
                   <tr>
                   <td>Student Full Name</td>
                   <td><input type="text" name="name" id="name" onChange={this.getName}/></td>
                   </tr>
                   <tr>
                   <td>Branch</td>
                   <td><input type="text" name="branch" id="branch" onChange={this.getBranch}/></td>
                   </tr>
                   <tr>
                   <td>Year</td>
                   <td><input type="text" name="year" id="year"  onChange={this.getStdYear}/></td>
                   </tr>
                   <tr>
                   <td><a href="./display-students"  id="backBtn1">Back to Dashboard</a><br/></td>
                   <td><input type="submit" name="register" id="register" onClick={this.editStudent} value="Save"/></td>
                   </tr>
                   </table>
                </div>
            </div>
        )
    }
}
export default EditStudent;