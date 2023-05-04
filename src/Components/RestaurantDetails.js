import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantDetails = () => {

    const { id } = useParams();

    const restaurantInfo = useRestaurantMenu(id);

    return (
        <div>
            <h2>{restaurantInfo?.name}</h2>
            {
                restaurantInfo && <img src={IMAGE_URL + restaurantInfo?.cloudinaryImageId} />
            }
            <h3>{restaurantInfo?.costForTwoMessage}</h3>
            <h3>{restaurantInfo?.areaName}</h3>
        </div>
    )
}

export default RestaurantDetails;