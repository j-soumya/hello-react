import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log("Body Rendered");

    const fetchData = async () => {

        // the reason we are using optional chaining is because the data we are fetching is not always guaranteed to be present, so it prevents errors if the path does not exist.
        // we are using 2 states because we want to store the original data in one state and the filtered data in another state.
        // otherwise we will lose the original data when we filter it.
        // we are using a proxy server to avoid CORS issues, as the API we are fetching data from does not allow cross-origin requests.
        const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.23310&lng=78.16920&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json, json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    useEffect(() => {
        fetchData();
    }, [])

    return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="search" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={() => {
                        const filteredList = listOfRestaurants.filter((r) => 
                            r.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                
                <button className="filter-btn" onClick={() => {
                    const topRest = listOfRestaurants.filter((r) => 
                        r.info.avgRating > 4.3
                    )
                    setFilteredRestaurant(topRest)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info.id} resData={restaurant?.info} name={<Link to={"/restaurants/"+restaurant?.info?.id}>{restaurant?.info?.name}</Link>} />
                ))}

            </div>
        </div>
    )
}

export default Body;