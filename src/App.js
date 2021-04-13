import './App.css';

function listOfStudents() {
  console.log('list of std clicked');
  window.location=('./display-students');
}

function searchStudent() {
  console.log('list of std clicked');
  window.location=('./search');
}

function registerStudent() {
  console.log('list of std clicked');
  window.location=('./add-student');
}

function App() {
  return (
    <div className="App">
      <div id="nav">
            <h2 id="txt">Student Management System</h2>
            <ul id="row">
              <li><a href='./add-student'>Add Student</a></li>
              <li><a href='./search'>Search</a></li>
              <li><a href='./display-students'>List Of Students</a></li> 
            </ul>
        </div>
      <div id="guide">
      <h3>Welcome Admin</h3>
      <h4>Below are the Stpes to Guide you</h4>
      </div> 
      <div id="box1">
      <h3>Show List Of Students</h3>
      <span>You can Edit or Delete the Record from here</span><br/>
      <button type="button" id="listOfstd" onClick={()=>{listOfStudents()}}>List of Students</button>
      </div>
      <div id="box2">
      <h3>Search for the Student</h3><br/>
      <span>You can search the Student by Id,Name,Branch or year</span><br/>
      <button type="button" id="searchbtn"  onClick={()=>{searchStudent()}}>Search Here</button>
      </div>
      <div id="box3">
        <h3>Register student by Clicking on Register Now</h3>
        <button type="button" id="registernow"  onClick={()=>{registerStudent()}}>Register Now</button>
      </div>
         
      
    </div>
  );
}

export default App;
