import React, { Component } from 'react'
import ScheduleService from '../services/ScheduleService';

class UpdateSchedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            week: '',
            monday: '',
            tuesday: '',
            wednesday:'',
            thursday:'',
            friday:'',
            saturday:'',
            sunday:''
        }
        this.changeWeek = this.changeWeek.bind(this);
        this.changeMon = this.changeMon.bind(this);
        this.changeTue = this.changeTue.bind(this);
        this.changeWed = this.changeWed.bind(this);
        this.changeThur = this.changeThur.bind(this);
        this.changeFri = this.changeFri.bind(this);
        this.changeSat = this.changeSat.bind(this);
        this.changeSun = this.changeSun.bind(this);
    }



    updateSched = (e) => {
        e.preventDefault();
        let schedule = {week: this.state.week, monday: this.state.monday, tuesday: this.state.tuesday, wednesday: this.state.wednesday, thursday: this.state.thursday, friday: this.state.friday, saturday: this.state.saturday, sunday: this.state.sunday};
        console.log('schedule => ' + JSON.stringify(schedule));
        console.log('id => ' + JSON.stringify(this.state.id));
       ScheduleService.updateSchedule(schedule, this.state.id).then(( response => {
            this.props.history.push('/schedule');
        }));
    }
    
    changeWeek= (event) => {
        this.setState({week: event.target.value});
    }

    changeMon= (event) => {
        this.setState({monday: event.target.value});
    }
    changeTue= (event) => {
        this.setState({tuesday: event.target.value});
    }
    changeWed= (event) => {
        this.setState({wednesday: event.target.value});
    }
    changeThur= (event) => {
        this.setState({thursday: event.target.value});
    }
    changeFri= (event) => {
        this.setState({friday: event.target.value});
    }
    changeSat= (event) => {
        this.setState({saturday: event.target.value});
    }
    changeSun= (event) => {
        this.setState({sunday: event.target.value});
    }


    cancel(){
        this.props.history.push('/schedule');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Schedule</h3>
                                <div className = "card-body">
                                    <form>
                                    <div class="form-group">
          <label>
            Week:
            <input type="text" class="form-control" value={this.state.week} onChange={this.changeWeek} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Monday:
            <input type="text" class="form-control" value={this.state.monday} onChange={this.changeMon} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Tuesday:
            <input type="text" class="form-control" value={this.state.tuesday} onChange={this.changeTue} />
          </label>

          <div className="form-group">
          </div>
          <label>
            Wednesday:
            <input type="text" class="form-control" value={this.state.wednesday} onChange={this.changeWed} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Thursday:
            <input type="text" class="form-control" value={this.state.thursday} onChange={this.changeThur} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Friday:
            <input type="text" class="form-control" value={this.state.friday} onChange={this.changeFri} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Saturday:
            <input type="text" class="form-control" value={this.state.saturday} onChange={this.changeSat} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Sunday:
            <input type="text" class="form-control" value={this.state.sunday} onChange={this.changeSun} />
          </label>
          
        
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateSched}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateSchedule