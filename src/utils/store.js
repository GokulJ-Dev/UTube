import { configureStore } from "@reduxjs/toolkit";
import favRestaurants from "../slices/favRestaurants";

const store = configureStore({
    reducer: {
        favouriteRestaurants: favRestaurants
    }
});

export default store;