import React from 'react';
// 5. import link from react-router dom so we can make links
import {Link} from "react-router-dom"

function Nav(props) {
  
    
    return (
        <div>
            <nav >
            
            <ul>
                <Link to="/">  
                 <li>Home</li>
                 </Link> 

                <Link to="/create">
                <li>Create Schedule</li>
                </Link>

                <Link to="/schedule">  
                <li>Schedule</li>
                </Link>

                <Link to="/createmood">
                <li>Create Mood</li>
                </Link>

                <Link to="/tracker">  
                <li>Mood Tracker</li>
                </Link>
              
            </ul>
            </nav>
        </div>
    );
}

export default Nav;