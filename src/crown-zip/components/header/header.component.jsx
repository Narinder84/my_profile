import React from 'react';
import { Link ,withRouter } from 'react-router-dom';
import {connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component'
import style from  './header.module.scss';
import CartDropDown from '../cart-dropdown/cart-dropdown.js'


const Header = (props) =>  { 
const {isHidden} = props

return (
  <div className={style.container} >
    <div className={style.header}>
    <div className={style.left} >
    <Link className={style.logoContainer} to='/cr'>
      
      <Logo className={style.logo} />
      <span>Crown Cloths Ltd.</span>  
    </Link>
    
    </div>
    
    <div className={style.options}>
      <Link className={style.options} to= {`${props.match.path}/shop`}>
        Shop
      </Link>
      <Link  className={style.options} to= {`${props.match.path}/signin`}>
        Log In
      </Link>
      <Link className={style.options} to={`${props.match.path}/cart_table`}>
        Check Out
      </Link>
      
      <Link className={style.options}  >
        <CartIcon/>
        
      </Link>
      <Link className={style.options} to='/smartBrain'>
        Smart Brain 
      </Link>
      <Link className={style.options} to='/'>
        Profile
      </Link>
    </div>
    
  </div>
    {isHidden ? (null):(<div className={style.cartDropDown} >
      <CartDropDown/>
    </div>)}
  </div>
);

}
const mapStateToProps=(state)=>({
  isHidden: state.cart.ishidden
})

export default withRouter( connect(mapStateToProps)(Header));
