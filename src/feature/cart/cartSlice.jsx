import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0
}

const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultState;
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload;
            const cartItem = state.cartItems.find((cartItem) => cartItem.cartID === product.cartID);
            if (cartItem) {
                cartItem.quantity += product.quantity
            } else {
                state.cartItems.push(product);
            }

            state.numItemsInCart += product.quantity;
            state.cartTotal += product.price * product.quantity
            cartSlice.caseReducers.calculateTotals(state)
            toast.success('Item added to cart')
        },
        clearCart: (state) => {
            localStorage.setItem('cart', JSON.stringify(defaultState))
            toast.success('Your cart is now cleared')
            return defaultState;
        },
        removeItem: (state, action) => {
            const { cartID } = action.payload;
            const product = state.cartItems.find((cartItem) => cartItem.cartID === cartID);
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.cartID !== cartID);

            state.numItemsInCart -= product.quantity;
            state.cartTotal -= product.price * product.quantity
            cartSlice.caseReducers.calculateTotals(state)
            toast.error('Item removed from cart')
        },
        editItem: (state, action) => {
            const { cartID, quantity } = action.payload;
            const cartItem = state.cartItems.find((cartItem) => cartItem.cartID === cartID);
            state.numItemsInCart += quantity - cartItem.quantity;
            state.cartTotal += cartItem.price * (quantity - cartItem.quantity)
            cartItem.quantity = quantity;
            cartSlice.caseReducers.calculateTotals(state)
            toast.success('Cart updated')
        },
        calculateTotals: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state))
        }
    }
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions
export default cartSlice.reducer;