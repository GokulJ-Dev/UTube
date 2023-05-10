import { createSlice } from "@reduxjs/toolkit";

const favRestaurants = createSlice({
    name: "favouriteRestaurants",
    initialState: {
        items: ["Meghana Foods", "Burger King"],
    },
    reducers: {
        addItems: (state, action) => {
            state?.items?.push(action.payload)
        },
        removeItems: (state, action) => { state?.items?.pop() }
    }
})

export const { addItems, removeItems } = favRestaurants.actions;

export default favRestaurants.reducer;