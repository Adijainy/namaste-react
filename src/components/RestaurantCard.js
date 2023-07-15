import { IMG_CON_URL } from "../constant";
const RestaurauntCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => (
  <div className="card">
    <img src={IMG_CON_URL + cloudinaryImageId} alt="" />
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <div className="card-info">
      <h4
        className="rating"
        style={{
          background:
            avgRating > 4 ? "#48c479" : avgRating < 3 ? "#e1b055" : "#db7c38",
        }}
      >
        <i className="fa-solid fa-star"></i> {avgRating}
      </h4>
      <h4>{deliveryTime} MINS</h4>
      <h4>{costForTwoString}</h4>
    </div>
  </div>
);
export default RestaurauntCard;
