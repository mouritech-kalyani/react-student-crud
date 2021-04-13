import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import DisplayStudents from './DisplayStudents';
import EditStudent from './EditStudent';
import AddStudent from './AddStudent';
import SearchStudent from './SearchStudent';
import Receipt from './Receipt';
import SearchInfo from './SearchInfo';

ReactDOM.render(
  <React.StrictMode>
    <Router>
          <Switch>
          <Route exact path="/">
            <Redirect to="/" />
            <App/>
            </Route>

            <Route path="/display-students">
              <DisplayStudents />
            </Route>
            <Route path="/search">
              <SearchStudent />
            </Route>
            <Route path="/add-student">
              <AddStudent />
            </Route>
            <Route path="/edit-student">
              <EditStudent />
            </Route>
            <Route path="/receipt">
              <Receipt />
            </Route>
            <Route path="/searched-info">
            <SearchInfo/>
            </Route>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
