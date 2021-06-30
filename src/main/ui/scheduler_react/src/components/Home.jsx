import React, { Component } from 'react';
import axios from 'axios';

// const requestTwo = axios.get(two);
// const requestThree= axios.get(three);
// const responseFour = response[3]
// const responseFive = response[4]
// const responseSix = response[5]
// const responseSeven = response[6]
// const responseEight = response[7]
// const responseNine = response[8]
// const responseTen = response[9]
// const responseEleven = response[10]
// const responseTwelve = response[11]

// requestFour,requestFive,requestSix,requestSeven,requestEight,requestNine,requestTen,requestEleven,requestTwelve
// const responseOne = responses[0]
// const responseTwo = responses[1]
// const responseThree = responses[2]
// four:response[3],
// five:response[4],
// six:response[5],
// seven:response[6],
// eight:response[7],
// nine:response[8],
// ten:response[9],
// eleven:response[10],
// twelve:response[11]

// const requestFour=axios.get(four)
// const requestFive=axios.get(five)
// const requestSix=axios.get(six)
// const requestSeven=axios.get(seven)
// const requestEight=axios.get(eight)
// const requestNine=axios.get(nine)
// const requestTen=axios.get(ten)
// const requestEleven=axios.get(eleven)
// const requestTwelve=axios.get(twelve)
// const two = finalurl+chart.virgo
//       const three = finalurl+chart.aries
// const four=finalurl+chart.cancer
// const five=finalurl+chart.capricorn
// const six=finalurl+chart.gemini
// const seven=finalurl+chart.leo
// const eight=finalurl+chart.libra
// const nine=finalurl+chart.pisces
// const ten=finalurl+chart.sagittarius
// const eleven=finalurl+chart.scorpio
// const twelve=finalurl+chart.taurus
const horoscope = "/horoscope/year/"
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
  
    clicked=()=>{
      const one = finalurl+chart.sagittarius
      
    console.log(one)

      axios.get(one).then(response=> {
        this.setState({
            one: response.data,
           
 
    })
    })
    }

    


   
    render() {
       
        return (
            <div className="card">
                <button className="btn btn-primary"onClick={this.clicked}>Sagittarius</button>
                    <table>
                        <thead>
                        <tr>
                        <th>Sign</th>
                        <th>Horoscope</th>
                       
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                          <td className="card-text">{this.state.one.sunsign}</td>   
                           
                        <td>{this.state.one.horoscope}</td>
                        
                        </tr>
                        </tbody>
                    </table>
                    
            
            
            </div>
        );
    }
}


export default Home