import React, { Component } from 'react';
import ScheduleService from '../services/ScheduleService';
import axios from 'axios';

class ScheduleComponent extends Component {
    constructor(props){
        super (props)
        this.state = {
           scheduleData:[]
        }
    };

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
              <h1>Schedule</h1> 
              <table>
                


                  
                  </table> 
            </div>
        );
    }
}

export default ScheduleComponent;