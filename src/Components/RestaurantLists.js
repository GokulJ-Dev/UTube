import React from 'react'
import { useSelector } from 'react-redux'

const RestaurantLists = () => {

    const favItems = useSelector(store => store.favouriteRestaurants.items);

    return (
        <div>{favItems.join(", ")}</div>
    )
}

export default RestaurantLists