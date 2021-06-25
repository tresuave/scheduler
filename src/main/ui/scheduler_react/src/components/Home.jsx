import React, { Component } from 'react';

const key= 'AIzaSyCcTwkA8w7C5qU7_-AYwGpFuoIFcNTdkPg';
const query ='energy+mix';
const result= 3;

var finalURL = `https://www.googleapis.com/youtube/v3/search?maxResults=${result}&order=date&q=${query}&key=${key}`

class Home extends Component {
    constructor(props){
        super()
        this.state = {
            more: [],
            isLoaded: false
        };
        this.clicked = this.clicked.bind(this);
    }
        
    clicked(){
        fetch(finalURL)
    .then((response) => response.json())
    .then((json) => {
        const more = json.items.map(obj => "https:youtube.com/embed/"+obj.id.videoId);
        this.setState({more});
        ;
    })
    .catch((error) => {
      console.error(error);
    });
    }
   
    render() {
        console.log(this.state.more)
        return (
            <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/oQKKCXXRcKE?start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <button onClick={this.clicked}> Find More videos</button> 
               {
                this.state.more.map((link,i)=> {
                    var frame =  <div key={i} className="moreVideos" > <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe></div>
                   return frame;
                  
                })
            }
           {this.frame}
            
            
            </div>
        );
    }
}


export default Home