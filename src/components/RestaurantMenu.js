import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [resInfo, setResInfo] = useState(null);
    
     useEffect(() => {
        fetchMenu()
    },[])

    const fetchMenu = async() => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        console.log(json)
        // console.log(json.data.cards[2].card.card.info)
        setResInfo(json?.data);
     
    }

    if (resInfo === null) return <Shimmer />;

    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   

    return(<div>
        <h1>{name}</h1> 
       <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
       <h2>Menu</h2>
       <ul>
        {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} -{" Rs."}
                {item?.card?.info?.defaultPrice/100 ||item?.card?.info?.price/100}
                </li>
        ))}
       
       </ul>
    </div>);

}

export default RestaurantMenu;