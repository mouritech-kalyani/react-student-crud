import { React, Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class SearchStudent extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.searchStudent = this.searchStudent.bind(this);
        this.searchData = this.searchData.bind(this);
        this.changeData = this.changeData.bind(this);
        sessionStorage.removeItem('DropdownValue')
        sessionStorage.removeItem('searchValue')
        sessionStorage.removeItem('SearchedResult')
    }
    changeData(e) {
        if (e.target.value !== 'undefined' || e.target.value !== 'null' || e.target.value !== '') {
            sessionStorage.setItem('DropdownValue', e.target.value);
        }
        else {
            Swal.fire({
                "type": "error",
                "text": "Please Fill the value to be searched"
            }).then(() => {
            })
        }
    }

    searchData(e) {
      sessionStorage.setItem('searchValue', e.target.value);
    }
    searchStudent() {
        const id = sessionStorage.getItem('searchValue');
        if(id !== null)
        {
            const dropdownValue = sessionStorage.getItem('DropdownValue');
            if (dropdownValue === 'id') {
                axios.get(`https://student-management-apis.herokuapp.com/students-information/by-id/${id}`).then((result) => {
                    if (result.data !== null && result.data !== "No Data Available") {
                        sessionStorage.setItem('SearchedResult', JSON.stringify(result.data));
                        window.location=('./searched-info');
                    } else {
                        Swal.fire({
                            "type": "error",
                            "text": "Data Not Present"
                        })
                    }

                })
            }
            else if (dropdownValue === 'name') {
                axios.get(`https://student-management-apis.herokuapp.com/students-information/by-name/${id}`).then((result) => {
                    if (result.data !== null && result.data !== "No Data Available") {
                        sessionStorage.setItem('SearchedResult', JSON.stringify(result.data));
                        window.location=('./searched-info');
                    } else {
                        Swal.fire({
                            "type": "error",
                            "text": "Data Not Present"
                        })
                    }

                })
            }
            else if (dropdownValue === 'branch') {
                axios.get(`https://student-management-apis.herokuapp.com/students-information/by-branch/${id}`).then((result) => {
                    if (result.data !== null && result.data !== "No Data Available") {
                        sessionStorage.setItem('SearchedResult', JSON.stringify(result.data));
                        window.location=('./searched-info');
                    } else {
                        Swal.fire({
                            "type": "error",
                            "text": "Data Not Present"
                        })
                    }

                })
            }
            else if (dropdownValue === 'year') {
                axios.get(`https://student-management-apis.herokuapp.com/students-information/by-year/${id}`).then((result) => {
                    if (result.data !== null && result.data !== "No Data Available") {
                        sessionStorage.setItem('SearchedResult', JSON.stringify(result.data));
                        window.location=('./searched-info');
                    } else {
                        Swal.fire({
                            "type": "error",
                            "text": "Data Not Present"
                        })
                    }

                })
            }
            else{
                Swal.fire({
                    "type":"error",
                    "text":"Please select the value from Dropdown"
                })
            }
        }
        else{
            Swal.fire({
                "type":"error",
                "text":"Please enter the value to search"
            })
        }
       
    }


    render() {
        return (
            <div>
                <a href="./" id="backBtn">Back to Dashboard</a><br />
                <h2 id="searchTxt">Search Student</h2>
                <div id="search1">
                    <select id="dropdown" onChange={this.changeData}>
                        <option value="none">Select an Option</option>
                        <option value="id">Id</option>
                        <option value="name">Name</option>
                        <option value="branch">Branch</option>
                        <option value="year">Year</option>
                    </select>
                    <input type="text" required onChange={this.searchData} name="search" id="val" placeholder="Enter Id / Name / Branch / Year Data to Search" />
                    <input type="submit" id="searchBox" value="Search" onClick={this.searchStudent} />
                </div>

            </div>
        )
    }
}
export default SearchStudent;