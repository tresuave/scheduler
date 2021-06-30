import React, { Component } from 'react';
import ScheduleService from '../services/ScheduleService';
import axios from 'axios';
import UpdateSchedule from './UpdateSchedule';


class ScheduleComponent extends Component {
    constructor(props){
        super (props)
        // make use of state
        this.state = {
           scheduleData:[],
           edit:false
        }
    };
    deleteSchedule(id){
        axios.delete(`http://localhost:8000/schedule/${id}`)
        window.location.reload();
    
    }



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

             
              <table className="table table-striped">
                  <thead className="thead-dark">
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
                                
                                <td scope="row" className="schedule">{schedulePiece.week}</td>
                                <td scope="row" className="schedule">{schedulePiece.monday}</td>
                                <td scope="row" className="schedule">{schedulePiece.tuesday}</td>
                                <td scope="row" className="schedule">{schedulePiece.wednesday}</td>
                                <td scope="row" className="schedule">{schedulePiece.thursday}</td>
                                <td scope="row" className="schedule">{schedulePiece.friday}</td>
                                <td scope="row" className="schedule">{schedulePiece.saturday}</td>
                                <td scope="row" className="schedule">{schedulePiece.sunday}</td>

                             
               <button onClick={()=>{this.deleteSchedule(schedulePiece.id)}}>Delete</button>
               <button onClick={()=>{this.UpdateSched()}}>Edit</button>
                            </tr>
                        )
                    }
                </tbody>
                  
                  </table> 
                  <UpdateSchedule /> 
                  
            </div>
        );

        
    }
}

export default ScheduleComponent;