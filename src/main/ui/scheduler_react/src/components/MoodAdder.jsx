import React from 'react';
import axios from 'axios';
import MoodService from '../services/MoodService';

class MoodAdder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {week: '',
                    monday:'',
                    tuesday:'',
                    wednesday:'',
                    thursday:'',
                    friday:'',
                    saturday:'',
                    sunday:''
                  };
  
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
  
    handleSubmit(event) {
      alert('A mood was submitted');
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
      
      axios.post('http://localhost:8000/mood',data)
        .then(response =>{
          console.log(response);
          console.log(response,data)
          window.location.reload();
        })
    
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Week:
            <input type="text" value={this.state.week} onChange={this.handleChangeWeek} />
          </label>
          <label>
            Monday:
            <input type="text" value={this.state.monday} onChange={this.handleChangeMonday} />
          </label>
          <label>
            Tuesday:
            <input type="text" value={this.state.tuesday} onChange={this.handleChangeTuesday} />
          </label>
          <label>
            Wednesday:
            <input type="text" value={this.state.wednesday} onChange={this.handleChangeWednesday} />
          </label>
          <label>
            Thursday:
            <input type="text" value={this.state.thursday} onChange={this.handleChangeThursday} />
          </label>
          <label>
            Friday:
            <input type="text" value={this.state.friday} onChange={this.handleChangeFriday} />
          </label>
          <label>
            Saturday:
            <input type="text" value={this.state.saturday} onChange={this.handleChangeSaturday} />
          </label>
          <label>
            Sunday:
            <input type="text" value={this.state.sunday} onChange={this.handleChangeSunday} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


export default MoodAdder