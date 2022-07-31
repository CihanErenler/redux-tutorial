import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/card/cardSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});
