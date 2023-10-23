import RestaurauntCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
import { Link } from "react-router-dom";
import { swiggy_api_URL, swiggy_mobile_api_URL } from "../constant";

//function to filter data
function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //Api call
    getRestaurant();
  }, []);

  //Function to check if mobile or not
  function isMobile() {
    return window.innerWidth <= 768;
  }

  async function getRestaurant() {
    // handle the error using try... catch for mobile
    try {
      const data = await fetch(
        isMobile() ? swiggy_mobile_api_URL : swiggy_api_URL
      );
      const json = await data.json();

      // updated state variable restaurants with Swiggy API data
      let topRestaurant;
      if (isMobile()) {
        topRestaurant =
          json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants;
      } else {
        topRestaurant =
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
      }
      setAllRestaurants(topRestaurant);
      setFilteredRestaurants(topRestaurant);
    } catch (error) {
      console.log(error);
    }
  }

  //not render component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="flex justify-center search-container py-1 mt-2 text-sm ">
        <input
          type="text"
          className="border-solid border-[0.05rem] border-black p-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-2 py-1 bg-[#212121] text-white rounded-r-md hover:bg-zinc-700"
          onClick={() => {
            //filterdata
            const data = filterData(searchText, allRestaurants);
            //update with new data
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurauntCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
