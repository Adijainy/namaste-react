import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  //GET DATA FROM API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurant(json.data);
  }

  //Return the data
  return restaurant;
};

export default useRestaurant;
