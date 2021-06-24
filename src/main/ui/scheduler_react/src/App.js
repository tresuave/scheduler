
import './App.css';
import ScheduleComponent from './components/ScheduleComponent';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';



class App extends React.Component {
  render() {

    return (


      <Router>
      <div className="App">
        <Nav />
        <ScheduleComponent />
  
      </div>
      </Router>
    );
  }
  
  }
  
export default App;
