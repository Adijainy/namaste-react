import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUI";
import { IMG_CON_URL, MENU_ITEM_TYPE } from "../constant";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2599333&lng=77.412615&restaurantId=" +
        id
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <ShimmerUi />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2> {restaurant?.cards[0]?.card?.card?.info?.name} </h2>
        <img
          src={
            IMG_CON_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h3>
        <h3>
          {" "}
          {restaurant?.cards[0]?.card?.card?.info?.areaName +
            ", " +
            restaurant?.cards[0]?.card?.card?.info?.city}{" "}
        </h3>
        <h4>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.map((x) => x.card?.card)
            ?.filter((x) => x["@type"] == MENU_ITEM_TYPE)
            ?.map((x) => x.itemCards)
            .flat()
            .map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
