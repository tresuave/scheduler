
import './App.css';
import ScheduleComponent from './components/ScheduleComponent';
import ScheduleForm from './components/ScheduleForm';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import MoodAdder from './components/MoodAdder';
import MoodTracker from './components/MoodTracker';
import Home from './components/Home';
import Quotes from './components/Quotes';



class App extends React.Component {
  render() {

    return (


      <Router>
      <div className="App">
        <Nav />
        <Switch>
      <Route path = "/" exact component={Home} />
      <Route path = "/create" component={ScheduleForm} />
      <Route path = "/schedule" component={ScheduleComponent} />
      <Route path = "/createmood" component={MoodAdder} />
      <Route path = "/tracker" component={MoodTracker} />
      <Route path = "/quotes" component={Quotes} />
        </Switch>
        
      </div>
      </Router>
    );
  }
  
  }

  
export default App;
