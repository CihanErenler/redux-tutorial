import { createSlice } from "@reduxjs/toolkit";
import cardItems from "../../cartItems";

const initialState = {
	cartItems: cardItems,
	amount: 1,
	total: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			const id = action.payload;
			const filteredItems = state.cartItems.filter((item) => item.id !== id);
			state.cartItems = filteredItems;
		},
	},
});

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
