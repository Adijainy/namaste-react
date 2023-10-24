import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUI";
import { IMG_CON_URL, MENU_IMG_URL, MENU_ITEM_TYPE } from "../constant";
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
    <div className=" md:w-2/4 px-7 py-5 mx-auto my-8 w-full">
      <div className="flex justify-between pb-4 border-b-2 border-gray-400 border-opacity-30">
        <div>
          <h1 className="text-lg font-bold text-gray-900 mb-1">
            {" "}
            {menuInfo?.name}{" "}
          </h1>
          {/* <img src={IMG_CON_URL + menuInfo?.cloudinaryImageId} /> */}
          <h3 className="text-sm text-gray-700">
            {menuInfo?.cuisines.join(", ")}
          </h3>
          <h3 className="text-sm text-gray-700">
            {" "}
            {menuInfo?.areaName + ", " + menuInfo?.sla.lastMileTravelString}
          </h3>
          <h4 className="pt-2 text-gray-700 font-bold text-sm">
            <i className="fa-regular fa-clock"></i> {menuInfo?.sla?.slaString}{" "}
            <i className="fa-solid fa-indian-rupee-sign ml-4"></i>{" "}
            {menuInfo?.costForTwoMessage}
          </h4>
        </div>
        <div className="border border-gray-400 p-2 border-opacity-30 text-center my-3">
          <h4
            className={
              menuInfo?.avgRating >= 4
                ? "text-[#48c479] font-bold"
                : menuInfo?.avgRating < 3
                ? "text-[#e1b055] font-bold"
                : "text-[#db7c38] font-bold"
            }
          >
            <i className="fa-solid fa-star"></i> {menuInfo?.avgRating}
          </h4>
          <h4 className="text-gray-500 font-bold text-[0.6rem] mt-2 pt-2 border-t-2 border-gray-400 border-opacity-30">
            {menuInfo?.totalRatingsString}
          </h4>
        </div>
      </div>

      <div className="pt-6">
        <h1 className="text-lg text-gray-700 font-bold">Menu</h1>
        <ul>
          {restaurant?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] == MENU_ITEM_TYPE)
            ?.map((x) => x.itemCards)
            .flat()
            .map((item, index) => (
              <li key={index}>
                <div className="my-3 py-3 flex justify-between border-b-2 border-gray-400 border-opacity-30">
                  <div className="w-3/4 mr-3">
                    <h3 className="text-[1rem] text-gray-600 font-bold mt-2 ">
                      {item?.card?.info?.name}
                    </h3>
                    <h4 className="text-sm mb-3 text-gray-700">
                      Rs.{" "}
                      {item?.card?.info?.price !== undefined
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.variantsV2?.variantGroups[0]
                            ?.variations[0]?.price +
                          " | " +
                          item?.card?.info?.variantsV2?.variantGroups[0]
                            ?.variations[0]?.name}
                    </h4>
                    <p className="text-xs text-gray-400 lg:line-clamp-none line-clamp-1 ">
                      {item?.card?.info?.description}
                    </p>
                  </div>
                  <div className="w-44 relative mb-5">
                    <img
                      className="h-28 rounded-md"
                      src={MENU_IMG_URL + item.card.info.imageId}
                      alt=""
                    />
                    <button
                      className="mt-1 ml-10 py-1 px-8 font-bold bg-white text-[#3ba064] border border-[#3ba064] rounded-md absolute top-24 hover:bg-[#3ba064] hover:text-white "
                      onClick={() => addFoodItem(item.card.info)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </li>
            ))}
          {/* //replace index by {item.card.info.name} after removing the duplicates in it as the array contains duplicate items */}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
