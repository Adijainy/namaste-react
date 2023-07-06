import RestaurauntCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { useState } from "react";

//function to filter data
function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            //filterdata
            const data = filterData(searchText, restaurants);
            //update with new data
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
