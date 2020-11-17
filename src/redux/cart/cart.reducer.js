import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
	visibility: false,
	items: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_VISIBILITY:
			return { ...state, visibility: !state.visibility };
		case CartActionTypes.ADD_ITEM:
			return { ...state, items: addItemToCart(state.items, action.payload) };
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				items: removeItemFromCart(state.items, action.payload)
			};
		case CartActionTypes.CLEAR_ITEM:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload.id)
			};
		default:
			return state;
	}
};

export default cartReducer;
