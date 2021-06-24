import React from 'react';
// 5. import link from react-router dom so we can make links
import {Link} from "react-router-dom"

function Nav(props) {
    const navStyle ={
        display:"block",
        float: "left",
        padding: "14px 16px",
        margin: "10px",
        border: "1px solid #bbb"

       
    }
    return (
        <div>
            <nav >
             <Link to="/">  
           
            </Link> 
            <ul style={navStyle}>
                <Link to="/create">
                <li>Create Schedule</li>
                </Link>
                <Link to="/schedule">  
                <li>Schedule</li>
                </Link>
              
            </ul>
            </nav>
        </div>
    );
}

export default Nav;