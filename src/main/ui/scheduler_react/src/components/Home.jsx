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
      const one=finalurl+chart.aquarius,
      const two=finalurl+chart.virgo,
      const three=finalurl+chart.aries,
      const four=finalurl+chart.cancer,
      const five=finalurl+chart.capricorn,
      const six=finalurl+chart.gemini,
      const seven=finalurl+chart.leo,
      const eight=finalurl+chart.libra,
      const nine=finalurl+chart.pisces,
      const ten=finalurl+chart.sagittarius,
      const eleven=finalurl+chart.scorpio,
      const twelve=finalurl+chart.taurus,

      const requestOne = axios.get(one)
      const requestTwo =axios.get(two)
      const requestThree=axios.get(three)
      const requestFour=axios.get(four)
      const requestFive=axios.get(five)
      const requestSix=axios.get(six)
      const requestSeven=axios.get(seven)
      const requestEight=axios.get(eight)
      const requestNine=axios.get(nine)
      const requestTen=axios.get(ten)
      const requestEleven=axios.get(eleven)
      const requestTwelve=axios.get(twelve)

        axios.all(requestOne,requestTwo,requestThree,requestFour,requestFive,requestSix,requestSeven,requestEight,requestNine,requestTen,requestEleven,requestTwelve)
    .then(axios.spread((...response=> {
        responseOne = response[0],
        responseTwo = response[1],
        responseThree = response[2],
        responseFour = response[3],
        responseFive = response[4],
        responseSix = response[5],
        responseSeven = response[6],
        responseEight = response[7],
        responseNine = response[8],
        responseTen = response[9],
        responseEleven = response[10],
        responseTwelve = response[11]
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