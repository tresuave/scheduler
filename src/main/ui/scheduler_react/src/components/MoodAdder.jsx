import React from 'react';
import axios from 'axios';


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
      const pass = {
        week: this.state.week,
        monday: this.state.monday,
        tuesday: this.state.tuesday,
        wednesday: this.state.wednesday,
        thursday: this.state.thursday,
        friday: this.state.friday,
        saturday: this.state.saturday,
        sunday: this.state.sunday

      }
      
      axios.post('http://localhost:8000/mood',pass)
        .then(response =>{
          console.log(response);
          console.log(response,pass);
          window.location.reload();
        })
    
    }
  
    render() {
      return (
        <div className="d-flex flex-column">
        <form onSubmit={this.handleSubmit}>
          <div></div>
          <label class="p-2">
            Week:
            <input type="text" value={this.state.week} onChange={this.handleChangeWeek} />
          </label>

          <div class="p-2">
          <label class="">
            Monday:
            <select class="custom-select" value={this.state.monday} onChange={this.handleChangeMonday} >
            <option value="👀">👀</option>
            <option value="😀"> 😀</option>
            <option value="🙃">🙃 </option>
            <option value="😐">😐 </option>
            <option value="😎">😎 </option>
            <option value="🤬">🤬 </option>
            <option value="🤑">🤑 </option>
            <option value="🤡">🤡 </option>
            <option value="😴">😴 </option>
            <option value="🤧">🤧 </option>
            <option value="😈">😈 </option>
            <option value="😳">😳 </option>  
          </select>
          </label>
          </div>


          <div class="p-2">
          <label class="">
            Tuesday:
            <select class="custom-select" value={this.state.tuesday} onChange={this.handleChangeTuesday}>
            <option value="👀">👀</option>
            <option value="😀">😀</option>
            <option value="🙃">🙃</option>
            <option value="😐">😐</option>
            <option value="😎">😎</option>
            <option value="🤬">🤬</option>
            <option value="🤑">🤑</option>
            <option value="🤡">🤡</option>
            <option value="😴">😴</option>
            <option value="🤧">🤧</option>
            <option value="😈">😈</option>
            <option value="😳">😳</option>  
          </select>
          </label>
          </div>

          <div class="p-2">
          <label class="">
            Wednesday:
            <select class="custom-select" value={this.state.wednesday} onChange={this.handleChangeWednesday}>
            <option value="👀">👀</option>
            <option value="😀">😀</option>
            <option value="🙃">🙃</option>
            <option value="😐">😐</option>
            <option value="😎">😎</option>
            <option value="🤬">🤬</option>
            <option value="🤑">🤑</option>
            <option value="🤡">🤡</option>
            <option value="😴">😴</option>
            <option value="🤧">🤧</option>
            <option value="😈">😈</option>
            <option value="😳">😳</option>  
          </select>
          </label>
          </div>

          <div class="p-2">
          <label class="">
            Thursday:
            <select class="custom-select" value={this.state.thursday} onChange={this.handleChangeThursday}>
            <option value="👀">👀</option>
            <option value="😀">😀</option>
            <option value="🙃">🙃</option>
            <option value="😐">😐</option>
            <option value="😎">😎</option>
            <option value="🤬">🤬</option>
            <option value="🤑">🤑</option>
            <option value="🤡">🤡</option>
            <option value="😴">😴</option>
            <option value="🤧">🤧</option>
            <option value="😈">😈</option>
            <option value="😳">😳</option>  
          </select>
          </label>
          </div>

          <div class="p-2">
          <label class="">
            Friday:
            <select class="custom-select" value={this.state.friday} onChange={this.handleChangeFriday}>
            <option value="👀">👀</option>
            <option value="😀">😀</option>
            <option value="🙃">🙃</option>
            <option value="😐">😐</option>
            <option value="😎">😎</option>
            <option value="🤬">🤬</option>
            <option value="🤑">🤑</option>
            <option value="🤡">🤡</option>
            <option value="😴">😴</option>
            <option value="🤧">🤧</option>
            <option value="😈">😈</option>
            <option value="😳">😳</option>  
          </select>
          </label>
          </div>


          <div class="p-2">
          <label class="">
            Saturday:
            <select class="custom-select" value={this.state.saturday} onChange={this.handleChangeSaturday}>
            <option value="👀">👀</option>
            <option value="😀">😀</option>
            <option value="🙃">🙃</option>
            <option value="😐">😐</option>
            <option value="😎">😎</option>
            <option value="🤬">🤬</option>
            <option value="🤑">🤑</option>
            <option value="🤡">🤡</option>
            <option value="😴">😴</option>
            <option value="🤧">🤧</option>
            <option value="😈">😈</option>
            <option value="😳">😳</option>  
          </select>
          </label>
          </div>


          <div class="p-2">
          <label class="">
            Sunday:
            <select class="custom-select" value={this.state.sunday} onChange={this.handleChangeSuday}>
            <option value="👀">👀</option>
            <option value="😀">😀</option>
            <option value="🙃">🙃</option>
            <option value="😐">😐</option>
            <option value="😎">😎</option>
            <option value="🤬">🤬</option>
            <option value="🤑">🤑</option>
            <option value="🤡">🤡</option>
            <option value="😴">😴</option>
            <option value="🤧">🤧</option>
            <option value="😈">😈</option>
            <option value="😳">😳</option>  
          </select>
          </label>
          </div>

          <input class="btn-success btn-lg" type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }


export default MoodAdder