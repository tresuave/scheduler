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
                                
                                <td className="schedule">{schedulePiece.week}</td>
                                <td className="schedule">{schedulePiece.monday}</td>
                                <td className="schedule">{schedulePiece.tuesday}</td>
                                <td className="schedule">{schedulePiece.wednesday}</td>
                                <td className="schedule">{schedulePiece.thursday}</td>
                                <td className="schedule">{schedulePiece.friday}</td>
                                <td className="schedule">{schedulePiece.saturday}</td>
                                <td className="schedule">{schedulePiece.sunday}</td>

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