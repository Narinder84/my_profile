
import React from 'react';
import {Link} from 'react-router-dom'

import './profile.css';

function Profile (){
    return(
        <div className='profile' >
            Narinder Pal Singh
            <Link to='smartBrain' ><p>Smart Brain App</p></Link>
        </div>
    );
};

export default Profile;