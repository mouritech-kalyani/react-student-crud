import { React, Component } from 'react';

class SearchInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchedData:{}
        }
    }
    
    render() {
        this.state.searchedData=JSON.parse(sessionStorage.getItem('SearchedResult'));
        console.log(this.state.searchedData);
        return (
            <div>
                 <div id="addForm">
                   <h2>Your Receipt</h2>
                   <table id="addFormTab">
                            <tr>
                                    <td>PRN Number</td>
                                    <td>{this.state.searchedData.id}</td>
                                    </tr>
                                    <tr>
                                    <td>Student Full Name</td>
                                    <td>{this.state.searchedData.name}</td>
                                    </tr>
                                    <tr>
                                    <td>Branch</td>
                                    <td>{this.state.searchedData.branch}</td>
                                    </tr>
                                    <tr>
                                    <td>Year</td>
                                    <td>{this.state.searchedData.year}</td>
                                    </tr>
                   <tr>
                       <td><a href="./display-students"  id="backBtn1">Back to Dashboard</a><br/></td>
                       <td><a href="./edit-student"  id="edit">Edit Record</a><br/></td>
                    </tr>
                   </table>
                </div>
            </div>
        )
    }
}
export default SearchInfo;