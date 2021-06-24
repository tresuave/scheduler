import React, { Component } from 'react';
import ScheduleService from '../services/ScheduleService';


class ScheduleComponent extends Component {
    constructor(props){
        super (props)
        // make use of state
        this.state = {
           scheduleData:[]
        }
    };

    // will mount Schedules from the database
componentDidMount(){
    ScheduleService.getSchedule().then((response)=>{
        this.setState({
            scheduleData: response.data
        })
    })
}
   
    render() {
        return (
            <div>
              <h1>Scheduler</h1> 
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
                        this.state.scheduleData.map(
                            schedulePiece=>
                            <tr key = {schedulePiece.id}>
                                
                                <td>{schedulePiece.week}</td>
                                <td>{schedulePiece.monday}</td>
                                <td>{schedulePiece.tuesday}</td>
                                <td>{schedulePiece.wednesday}</td>
                                <td>{schedulePiece.thursday}</td>
                                <td>{schedulePiece.friday}</td>
                                <td>{schedulePiece.saturday}</td>
                                <td>{schedulePiece.sunday}</td>
                                
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

export default ScheduleComponent;