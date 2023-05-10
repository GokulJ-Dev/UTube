import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, removeItems } from '../slices/favRestaurants';

const RestaurantDetails = () => {

    const { id } = useParams();

    const restaurantInfo = useRestaurantMenu(id);

    const dispatch = useDispatch();

    const favItems = useSelector(store => store.favouriteRestaurants.items);

    const handleAddItems = (name) => {
        const checkExisting = favItems.some(res => res == name);
        console.log(checkExisting);
        if (checkExisting)
            dispatch(removeItems());
        else
            dispatch(addItems(name));
    }

    return (
        <div>
            <h2>{restaurantInfo?.name}</h2>
            <button className=" border border-black bg-blue-300 my-2" onClick={() => handleAddItems(restaurantInfo?.name)} >❤️ Fav Restaurant</button>
            {
                restaurantInfo && <img src={IMAGE_URL + restaurantInfo?.cloudinaryImageId} />
            }
            <h3>{restaurantInfo?.costForTwoMessage}</h3>
            <h3>{restaurantInfo?.areaName}</h3>
        </div>
    )
}

export default RestaurantDetails;