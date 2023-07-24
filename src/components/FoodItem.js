import { IMG_CON_URL } from "../constant";
const FoodItem = ({ name, imageId, defaultPrice }) => (
  <div className="w-64 p-5 m-2 border-solid border-[0.05rem] border-white hover:border-zinc-600 ">
    <img src={IMG_CON_URL + imageId} alt="" />
    <h2 className="text-base font-semibold mt-1">{name}</h2>
    <h3>Price: Rs. {defaultPrice / 100}</h3>
  </div>
);
export default FoodItem;
