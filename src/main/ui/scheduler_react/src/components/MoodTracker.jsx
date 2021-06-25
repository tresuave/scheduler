import React, { Component } from 'react';
import MoodService from '../services/MoodService';


class MoodTracker extends Component {
    constructor(props){
        super (props)
        // make use of state
        this.state = {
           MoodData:[]
        }
    };

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
              <h1>Mood Tracker</h1> 
              <table>
                  <thead>
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
                            <tr key = {Mood.id}>
                                
                                <td className="mood">{Mood.week}</td>
                                <td className="mood">{Mood.monday}</td>
                                <td className="mood">{Mood.tuesday}</td>
                                <td className="mood">{Mood.wednesday}</td>
                                <td className="mood">{Mood.thursday}</td>
                                <td className="mood">{Mood.friday}</td>
                                <td className="mood">{Mood.saturday}</td>
                                <td className="mood">{Mood.sunday}</td>

                                <button onClick={()=>{}}></button>
            
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