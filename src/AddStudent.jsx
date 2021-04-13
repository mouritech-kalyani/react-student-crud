import { React, Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            branch:'',
            year:''
        }
        this.getName = this.getName.bind(this);
        this.getBranch = this.getBranch.bind(this);
        this.getStdYear = this.getStdYear.bind(this);
        this.addStudent=this.addStudent.bind(this);
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

addStudent(){
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
        sessionStorage.setItem('Name',this.state.name);
        sessionStorage.setItem('Branch',this.state.branch);
        sessionStorage.setItem('Year',this.state.year);

        axios({
            method: 'post',
            url: 'https://student-management-apis.herokuapp.com/students-information',
            data: {
              name: this.state.name,
              branch: this.state.branch,
              year: this.state.year
            }
          }).then((res)=>
          {
            if(res){
                swal.fire({
                    "type":"success",
                    "title":"Record added successfully",
                    "buttons": true,
                }).then(()=>{
                    window.location=('./receipt');
                    console.log('Entered Data is',res)
                })
            } 
          }
          )
    }
    
}
    render() {
        return (
            <div>
                 <div id="addForm">
                   <h2>Add Student</h2>
                   <table id="addFormTab">
                   <tr>
                   <td>Student Full Name</td>
                   <td><input type="text" name="name" id="name" placeholder="Enter Full Name eg. Alex" onChange={this.getName}/></td>
                   </tr>
                   <tr>
                   <td>Branch</td>
                   <td><input type="text" name="branch" id="branch" placeholder="Enter Branch Name eg. Chemical Technology" onChange={this.getBranch}/></td>
                   </tr>
                   <tr>
                   <td>Year</td>
                   <td><input type="text" name="year" id="year" placeholder="Enter Academic Year eg. Second Year" onChange={this.getStdYear}/></td>
                   </tr>
                   <tr>
                   <td><a href="./display-students"  id="backBtn1">Back to Dashboard</a><br/></td>
                   <td><input type="submit" name="register" id="register" onClick={this.addStudent} value="Register"/></td>
                   </tr>
                   </table>
                </div>
            </div>
        )
    }
}
export default AddStudent;