
import React from 'react';
import {Link} from 'react-router-dom'

import './profile.scss';

function Profile (){
    return(
        <div className='profile' >
            <h1>Narinder Pal Singh</h1>
            <p><em>Full stack developer-<strong>React and Node.js</strong></em></p>
            <p><strong>Email</strong> : getdev84@gmail.com</p>
            <p><strong>Location</strong> : NYC USA</p>
            <hr></hr>
            <p><strong>Projects:</strong></p>
            <ul>
            <p><Link  to='smartBrain' ><em>Smart Brain App</em></Link> --- <em><strong>Face detection app</strong>. Created by using <strong>Clarifai API</strong> and <strong>hash</strong> for securing users login information.</em> </p>

            <p><Link to='/cr' ><em>Crown-cloth App</em></Link>--- <em><strong>E-commerce app</strong>. Created by using <strong>Redux</strong> and <strong>React Router</strong></em> library.</p>
            </ul>
            <hr></hr>
            <p><strong>Skills:</strong></p> <p>Working on it</p>
            <hr></hr>
            <p><strong>Education:</strong></p>
            <p>Working on it</p>
        </div>
    );
};

export default Profile;