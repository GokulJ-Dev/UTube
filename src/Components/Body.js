import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restPerundurai, swiggyMock } from "../utils/mockData";
import Loader from "./Loader";

const Body = () => {
    //let demodata = restPerundurai;
    const [demoData, setDemoData] = useState([]);
    const [searchedRestaurants, setSearchedRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        let json = await data?.json();
        let swiggyData = json?.data?.cards[2]?.data?.data?.cards;
        setDemoData(swiggyData);
        setSearchedRestaurants(swiggyData);
    }
    // conditional Rendering 
    return demoData.length === 0 ? (<Loader />) : (
        <>
            < div >
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value) }}
                />
                < button className="search-btn" onClick={() => {
                    let searchedData = demoData.filter(res => res.data?.name.toLowerCase().includes(searchText.toLowerCase()));
                    console.log(searchedData);
                    setSearchedRestaurants(searchedData);
                }}> Search</button >
                <button className="filter-btn" onClick={() => {
                    let filteredData = demoData.filter(res => res.data?.avgRating > 4);
                    console.log(filteredData);
                    setSearchedRestaurants(filteredData);
                }}>Best Restaurants</button>
            </div >
            {searchedRestaurants.length == 0 ? (<h2>No RestaurantCard matches your search/filter</h2>) : (<>
                <div className="body-container">
                    {searchedRestaurants.map(res => <RestaurantCard restaurantDetails={res.data} key={res?.data?.id} />)}
                    {/*Component Composition*/}
                </div>
            </>)}
        </>
    )
}

export default Body;