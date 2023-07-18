import { IMG_CON_URL } from "../constant";
const RestaurauntCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => (
  <div className="w-64 p-5 m-2 border-solid border-[0.05rem] border-white hover:border-zinc-600 ">
    <img src={IMG_CON_URL + cloudinaryImageId} alt="" />
    <h2 className="text-base font-semibold mt-1">{name}</h2>
    <h3 className="text-xs mt-2 mb-3">{cuisines.join(", ")}</h3>
    <div className="flex flex-wrap text-[0.6rem] font-semibold mt-1">
      <h4
        className="text-white px-2 py-1 "
        style={{
          background:
            avgRating >= 4 ? "#48c479" : avgRating < 3 ? "#e1b055" : "#db7c38",
        }}
      >
        <i className="fa-solid fa-star"></i> {avgRating}
      </h4>
      <h4 className="px-2 py-1">{deliveryTime} MINS</h4>
      <h4 className="px-2 py-1">{costForTwoString}</h4>
    </div>
  </div>
);
export default RestaurauntCard;
