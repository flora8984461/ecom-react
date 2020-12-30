import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { ReactComponent as Logo } from './assets/crown.svg'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../utils/firebaseSetup';
import CartIcon from './cart/cart-icon';
import CartDropdown from './cart/cart-dropdown';
import { selectCartHidden } from './redux/cart/cart-selector';
import { selectCurrentUser } from './redux/user/user-selector';
import SearchBar from './searchbar';

const Header = ({ currentUser, hidden, ...otherProps }) => {
  const path = otherProps.location.pathname;
  return (
    <div className="container-fluid">
      <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='options'>
          {path === "/" && <SearchBar />}
          <CartIcon />
          {currentUser ? (
            <div className='signout option' onClick={() => auth.signOut()}>
              Hello, { currentUser.userName},  SIGN OUT
            </div>
          ) : (
              <Link className='option' to='/signin'>
                SIGN IN
              </Link>
            )}
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    </div>

  )
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default withRouter(connect(mapStateToProps)(Header));