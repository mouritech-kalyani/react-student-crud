import { React, Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

class AddStudent extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                 <div id="addForm">
                   <h2>Your Receipt</h2>
                   <table id="addFormTab">
                   <tr>
                   <td>Student Full Name</td>
                   <td>{sessionStorage.getItem('Name')}</td>
                   </tr>
                   <tr>
                   <td>Branch</td>
                   <td>{sessionStorage.getItem('Branch')}</td>
                   </tr>
                   <tr>
                   <td>Year</td>
                   <td>{sessionStorage.getItem('Year')}</td>
                   </tr>
                   <tr>
                       <td></td>
                       <td><a href="./display-students"  id="backBtn1">Back to Dashboard</a><br/></td>
                    </tr>
                   </table>
                </div>
            </div>
        )
    }
}
export default AddStudent;