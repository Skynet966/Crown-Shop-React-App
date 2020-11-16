import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/logo/shopping-bag.svg';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.sass';

const CartIcon = ({ toggleCartVisibility, itemCount }) => (
	<div className='cart-icon' onClick={toggleCartVisibility}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);
const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
});
const mapDispatchToProps = dispatch => ({
	toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
