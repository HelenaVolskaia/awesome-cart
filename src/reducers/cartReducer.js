import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
    switch (action.type) {
        case 'ADD':
		    action.item.quantity = action.item.quantity || 1 ;
		    if (state.some(e => e.name === action.item.name)) {
		    	action.item.quantity = action.item.quantity +1;
		    	return [...state]
			}
            return [...state, action.item]
        case 'REMOVE':
		    if (action.item.quantity > 1) {
				action.item.quantity = action.item.quantity -1;
				return [...state];
			}
            return state.filter( i => i.name !== action.item.name);
        default:
            return state;
    }
};