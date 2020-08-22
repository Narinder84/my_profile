
import React from 'react';
import {Link} from 'react-router-dom'

import './profile.scss';

function Profile (){
    return(
        <div className='profile' >
            <h1>Narinder Pal Singh</h1>
            <p><em>Full stack developer-<strong>React and Node.js</strong></em></p>
            <p>I am web developer .</p>
            <hr></hr>
            <Link to='smartBrain' ><p>Smart Brain App</p></Link>
            <Link to='/cr' ><p>Crown-cloth App</p></Link>

        </div>
    );
};

export default Profile;