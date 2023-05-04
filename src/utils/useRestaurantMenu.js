import { useState, useEffect } from "react";
import { GET_RESTAURANT_DETAILS_URL } from "./constants";

const useRestaurantMenu = (id) => {

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantDetails();
    }, []);

    const getRestaurantDetails = async () => {
        let data = await fetch(GET_RESTAURANT_DETAILS_URL + id);
        let json = await data?.json();
        let info = json?.data?.cards?.[0]?.card?.card?.info;
        setRestaurant(info);
    }

    return restaurant;

}

export default useRestaurantMenu;