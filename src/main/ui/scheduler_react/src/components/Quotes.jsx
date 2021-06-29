import React, {Component} from 'react';
import axios from 'axios';

const API = 'https://zenquotes.io/api/';
const mode ='random';

var finalapi =`${API}${mode}`
class Quotes extends Component {
    constructor(props){
        super()
        this.state = {
           quoteData:[],
            isLoaded: false,
            errorMessage:[]
        };
    }   

inspire=()=> {
    axios.get(finalapi)
    .then(response => this.setState({ quoteData: response.data }))
  
}


render(){
    return (
<div className="card jumbotron">

<button class="btn-primary btn-sm" onClick={this.inspire}>Inspiration</button>
{this.state.quoteData.map((quote,i)=>{
    var print = <div class="display-3 card-body" key={i}>
        {quote.q}-{quote.a}
        </div>
        return print
}
)}
</div>
    );


}



}

export default Quotes