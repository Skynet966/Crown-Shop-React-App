import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.items);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumalatedQuantity, cartItem) =>
				accumalatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartVisibility = createSelector(
	[selectCart],
	cart => cart.visibility
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
	cartItems.reduce(
		(accumalatedQuantity, cartItem) =>
			accumalatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
);
