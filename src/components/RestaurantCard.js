import { Link } from "react-router";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData , name} = props;
    console.log(resData);
    const { avgRating, cloudinaryImageId, cuisines, costForTwo, sla } = resData;
   
    return (<div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img  className="res-logo"
        src={CDN_URL+ cloudinaryImageId} alt="restaurant" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
    </div>)}

export default RestaurantCard;