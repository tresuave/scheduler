import React from 'react';
import axios from 'axios';
import ScheduleService from '../services/ScheduleService';

class ScheduleForm extends React.Component {
    constructor(props) {
      super(props);
    //   represents the data to be added with axios
      this.state = {week: '',
                    monday:'',
                    tuesday:'',
                    wednesday:'',
                    thursday:'',
                    friday:'',
                    saturday:'',
                    sunday:''
                  };
//   binds the input while typing
      this.handleChangeWeek = this.handleChangeWeek.bind(this);
      this.handleChangeMonday = this.handleChangeMonday.bind(this);
      this.handleChangeTuesday= this.handleChangeTuesday.bind(this);
      this.handleChangeWednesday = this.handleChangeWednesday.bind(this);
      this.handleChangeThursday = this.handleChangeThursday.bind(this);
      this.handleChangeFriday = this.handleChangeFriday.bind(this);
      this.handleChangeSaturday = this.handleChangeSaturday.bind(this);
      this.handleChangeSunday = this.handleChangeSunday.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
//   captures the keyboard movements
    handleChangeWeek(event){
     console.log()
     this.setState({week: event.target.value})

   }
   handleChangeMonday(event){
    this.setState({monday: event.target.value})
  }
  handleChangeTuesday(event){
    this.setState({tuesday: event.target.value})
  }
  handleChangeWednesday(event){
    this.setState({wednesday: event.target.value})
  }
  handleChangeThursday(event){
      this.setState({thursday: event.target.value})
  }
  handleChangeFriday(event){
    this.setState({friday: event.target.value})
}
handleChangeSaturday(event){
    this.setState({saturday: event.target.value})
}
handleChangeSunday(event){
    this.setState({sunday: event.target.value})
}
//   submits the data to state
    handleSubmit(event) {
      alert('A task was submitted');
      event.preventDefault();
      const data = {
        week: this.state.week,
        monday: this.state.monday,
        tuesday: this.state.tuesday,
        wednesday: this.state.wednesday,
        thursday: this.state.thursday,
        friday: this.state.friday,
        saturday: this.state.saturday,
        sunday: this.state.sunday

      }
      
      axios.post('http://localhost:8000/schedule',data)
        .then(response =>{
          console.log(response);
          console.log(response,data)
          window.location.reload();
        })
    
    }
  
    render() {
      return (
        //   represents the input of the schedule
        <div>

        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
          <label>
            Week:
            <input type="text" class="form-control" value={this.state.week} onChange={this.handleChangeWeek} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Monday:
            <input type="text" class="form-control" value={this.state.monday} onChange={this.handleChangeMonday} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Tuesday:
            <input type="text" class="form-control" value={this.state.tuesday} onChange={this.handleChangeTuesday} />
          </label>

          <div className="form-group">
          </div>
          <label>
            Wednesday:
            <input type="text" class="form-control" value={this.state.wednesday} onChange={this.handleChangeWednesday} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Thursday:
            <input type="text" class="form-control" value={this.state.thursday} onChange={this.handleChangeThursday} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Friday:
            <input type="text" class="form-control" value={this.state.friday} onChange={this.handleChangeFriday} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Saturday:
            <input type="text" class="form-control" value={this.state.saturday} onChange={this.handleChangeSaturday} />
          </label>
          </div>

          <div className="form-group">
          <label>
            Sunday:
            <input type="text" class="form-control" value={this.state.sunday} onChange={this.handleChangeSunday} />
          </label>
          </div>

          <input type="submit" className="btn btn-success" value="Submit" />
        </form>
        </div>
      );
    }
  }
  export default ScheduleForm