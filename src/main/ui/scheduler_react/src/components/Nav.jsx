import React from 'react';
// 5. import link from react-router dom so we can make links
import {Link} from "react-router-dom"

function Nav(props) {
  
    
    return (
        <div>
            <nav >
            
            <ul className="nav nav-tabs">
                <Link to="/">  
                 <li className="nav-item"><a className="nav-link active">Home</a> </li>
                 </Link> 

                <Link to="/create">
                <li className="nav-item"><a className="nav-link">Create Schedule</a></li>
                </Link>

                <Link to="/schedule">  
                <li className="nav-item"><a className="nav-link">Schedule</a></li>
                </Link>

                <Link to="/createmood">
                <li className="nav-item"><a className="nav-link">Create Mood</a></li>
                </Link>

                <Link to="/tracker">  
                <li className="nav-item"><a className="nav-link">Mood Tracker</a></li>
                </Link>

                <Link to="/quotes">  
                <li className="nav-item"><a className="nav-link">Quotes</a></li>
                </Link>
              
            </ul>
            </nav>
        </div>
    );
}

export default Nav;