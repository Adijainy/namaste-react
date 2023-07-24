import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUI";
import { IMG_CON_URL, MENU_ITEM_TYPE } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);
  const menuInfo = restaurant?.cards[0]?.card?.card?.info;

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <ShimmerUi />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2> {menuInfo?.name} </h2>
        <img src={IMG_CON_URL + menuInfo?.cloudinaryImageId} />
        <h3>{menuInfo?.cuisines.join(", ")}</h3>
        <h3> {menuInfo?.areaName + ", " + menuInfo?.city} </h3>
        <h4>{menuInfo?.costForTwoMessage}</h4>
      </div>
      <div></div>
      <div className="p-5">
        <h1 className="text-xl">Menu</h1>
        <ul>
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.map((x) => x.card?.card)
            ?.filter((x) => x["@type"] == MENU_ITEM_TYPE)
            ?.map((x) => x.itemCards)
            .flat()
            .map((item, index) => (
              <li key={index}>
                {item.card.info.name} -{" "}
                <button
                  className="p-1 bg-green-100"
                  onClick={() => addFoodItem(item.card.info)}
                >
                  Add
                </button>{" "}
              </li>
            ))}
          {/* //replace index by {item.card.info.name} after removing the duplicates in it as the array contains duplicate items */}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
