import RestaurauntCard from "./RestaurantCard";
import { restaurantList } from "../constant";
const Body = () =>(
    <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
            return <RestaurauntCard {...restaurant.data} key={restaurant.data.id}/>
        }
        )}
    </div>
);
export default Body;