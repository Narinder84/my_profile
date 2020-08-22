import React from 'react';
import {Link} from 'react-router-dom'
import './navigation.styles.scss'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='lk f3 link dim black underline pa3 pointer'>Sign Out</p>
          <p className=' f3 lk pa3'>|</p>
          <p className=' f3 lk  pa3'>
            <Link className='lk f3 link dim underline pa3 pointer ' to='/cr' > Crown App</Link>
          </p>
          <p className=' f3 link dim underline pa3 pointer'>
            <Link className='lk' to='/' >Profile</Link>
          </p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className=' lk f3 link dim  underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='lk f3 link dim underline pa3 pointer'>Register</p>
          <p className=' f3 lk pa3'>|</p>
          <p className=' f3 lk  pa3'>
            <Link className='lk f3 link dim underline pa3 pointer ' to='/cr' > Crown App</Link>
          </p>
          <p className=' f3 link dim underline pa3 pointer'>
            <Link className='lk' to='/' > Profile</Link>
          </p>
          
        </nav>
      );
    }
}

export default Navigation;