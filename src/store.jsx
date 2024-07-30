import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cart/cartSlice";
import userSlice from "./feature/user/userSlice";

export const store = configureStore({
    reducer: {
        cartState: cartSlice,
        userState: userSlice,
    }
})