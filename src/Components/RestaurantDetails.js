import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { cloudinaryImgUrl } from '../utils/constants';

const RestaurantDetails = () => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        getRestaurantDetails();
    }, []);

    const getRestaurantDetails = async () => {
        let data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + id);
        let json = await data?.json();
        let info = json?.data?.cards?.[0]?.card?.card?.info;
        setRestaurantInfo(info);
    }
    return (
        <div>
            <h2>{restaurantInfo?.name}</h2>
            {
                restaurantInfo && <img src={cloudinaryImgUrl + restaurantInfo?.cloudinaryImageId} />
            }

            <h3>{restaurantInfo?.costForTwoMessage}</h3>
            <h3>{restaurantInfo?.areaName}</h3>
        </div>
    )
}

export default RestaurantDetails;