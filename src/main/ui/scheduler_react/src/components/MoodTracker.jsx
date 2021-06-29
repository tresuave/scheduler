import React, { Component } from 'react';
import MoodService from '../services/MoodService';
import axios from 'axios';


class MoodTracker extends Component {
    constructor(props){
        super (props)
        // makes use of state
        this.state = {
           MoodData:[]
        }
    };
    deleteMood(id){
        axios.delete(`http://localhost:8000/mood/${id}`)
        window.location.reload();
    
    }
    
    // will mount Schedules from the database
componentDidMount(){
    MoodService.getMood().then((response)=>{
        this.setState({
            MoodData: response.data
        })
    })
}

    render() {
        return (
            <div>
                {/* table for the mood tracker */}
              <h1>Mood Tracker</h1> 
              <table className="table">
                  <thead className="thead-light">
                <tr>
                    <th>Week</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th> Sunday</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.MoodData.map(
                            Mood=>
                            // id makes the application work
                            <tr key = {Mood.id}>
                                
                                <td scope="row" className="mood">{Mood.week}</td>
                                <td scope="row" className="mood">{Mood.monday}</td>
                                <td scope="row" className="mood">{Mood.tuesday}</td>
                                <td scope="row" className="mood">{Mood.wednesday}</td>
                                <td scope="row" className="mood">{Mood.thursday}</td>
                                <td scope="row" className="mood">{Mood.friday}</td>
                                <td scope="row" className="mood">{Mood.saturday}</td>
                                <td scope="row" className="mood">{Mood.sunday}</td>
                                <td>
                                <button onClick={()=>{this.deleteMood(Mood.id)}}>Delete</button>
                              
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                  
                  </table> 
            </div>
        );

        
    }
}

export default MoodTracker;