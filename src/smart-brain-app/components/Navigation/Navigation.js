import React from 'react';
import {Link} from 'react-router-dom'
import './navigation.styles.scss'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='lk f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className=' lk f3 link dim  underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='lk f3 link dim underline pa3 pointer'>Register</p>
          <Link className='f3 link dim black underline pa3 pointer' to='/' >Back to Profile Page</Link>
        </nav>
      );
    }
}

export default Navigation;