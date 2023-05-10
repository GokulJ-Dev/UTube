import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { restPerundurai, swiggyMock } from "../utils/mockData";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { GET_RESTAURANT_LIST } from "../utils/constants";

const Body = () => {
    const [demoData, setDemoData] = useState([]);
    const [searchedRestaurants, setSearchedRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");



    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        let data = await fetch(GET_RESTAURANT_LIST);
        let json = await data?.json();
        let swiggyData = json?.data?.cards[2]?.data?.data?.cards;
        setDemoData(swiggyData);
        setSearchedRestaurants(swiggyData);
    }
    // conditional Rendering 
    return demoData.length === 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {swiggyMock.map(res => <Loader key={res.data.id} />)}
        </div>) : (
        <>
            {
                console.log("Restaurant List RENDER")
            }
            < div >
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value) }}
                    className=" border-2"
                />
                < button className="search-btn" onClick={() => {
                    let searchedData = demoData.filter(res => res.data?.name.toLowerCase().includes(searchText.toLowerCase()));
                    setSearchedRestaurants(searchedData);
                }}> Search</button >
                <button className="filter-btn" onClick={() => {
                    let filteredData = demoData.filter(res => res.data?.avgRating > 4);
                    setSearchedRestaurants(filteredData);
                }}>Best Restaurants</button>
            </div >
            {searchedRestaurants.length == 0 ? (<h2>No RestaurantCard matches your search/filter</h2>) : (<>
                <div className=" flex flex-wrap">
                    {searchedRestaurants.map(res => (
                        <Link to={"/restaurants/" + res?.data?.id} className="link-to-tag" key={res?.data?.id} >
                            <RestaurantCard restaurantDetails={res.data} />
                        </Link>
                    ))}
                </div>
            </>)}

        </>
    )
}

export default Body;