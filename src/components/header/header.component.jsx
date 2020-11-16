import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo/crown.svg';

import './header.styles.sass';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, visibility }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/contact'>
				CONTACT
			</Link>
			<Link className='option' to='/about'>
				ABOUT
			</Link>
			{currentUser ? (
				<div className='option' onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{visibility ? <CartDropdown /> : null}
	</div>
);

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
	visibility: state.cart.visibility
});

export default connect(mapStateToProps)(Header);
