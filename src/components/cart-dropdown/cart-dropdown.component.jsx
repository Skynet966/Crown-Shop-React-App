import React from 'react';

import './cart-dropdown.styles.sass';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-input.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ items }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{items.map(item => (
				<CartItem key={item.id} item={item} />
			))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = state => ({
	items: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
