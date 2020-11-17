import React from 'react';

import './cart-dropdown.styles.sass';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-input.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ items, dispatch, history }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{items.map(item => (
				<CartItem key={item.id} item={item} />
			))}
		</div>
		<CustomButton
			onClick={() => {
				history.push('/checkout');
				dispatch(toggleCartVisibility());
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	items: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
