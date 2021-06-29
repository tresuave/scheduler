import React, { Component } from 'react';
import axios from 'axios';



const horoscope = "/horoscope/today/"
const chart ={
 aries :"aries",
taurus:"taurus",
gemini :"gemini",
cancer :"cancer",
leo :"leo",
virgo :"virgo",
libra :"libra",
scorpio :"scorpio",
sagittarius : "sagittarius",
capricorn :"capricorn",
aquarius :"aquarius",
pisces :"pisces"
}
var finalurl=`http://horoscope-api.herokuapp.com${horoscope}`


class Home extends Component {
    constructor(props){
        super()
        this.state = {
            one: [],
            two:[],
            three:[],
            four:[],
            five:[],
            six:[],
            seven:[],
            eight:[],
            nine:[],
            ten:[],
            eleven:[],
            twelve:[],
            isLoaded: false
        };
        this.clicked = this.clicked.bind(this);
    }
     close(){
         <style>
          
             display:none;</style>

     }   
    clicked=()=>{
        axios.all(finalurl+chart.aquarius,finalurl+chart.aries,finalurl+chart.cancer,finalurl+chart.capricorn,finalurl+chart.gemini,finalurl+chart.leo,finalurl+chart.libra,finalurl+chart.pisces,finalurl+chart.sagittarius, finalurl+chart.scorpio+finalurl+chart.taurus+finalurl+chart.virgo)
    .then(axios.spread((...response=> {
        
    }
         this.setState({more: response.data}
            )
    )
 
}
   
    render() {
        
        return (
            <div>
                <button onClick={this.clicked}></button>
                    <table>
                        <thead>
                        <tr>
                        <th>Sign</th>
                        <th>Horscope</th>
                       
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                          <td>{this.state.more.sunsign}</td>       
                        <td>{this.state.more.horoscope}</td>
                        
                        </tr>
                        </tbody>
                    </table>
                    
            
            
            </div>
        );
    }
}


export default Home