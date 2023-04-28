import { cloudinaryImgUrl } from "../utils/constants";

const RestaurantCard = ({ restaurantDetails }) => {
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={cloudinaryImgUrl + restaurantDetails.cloudinaryImageId} />
            <h3>{restaurantDetails.name}</h3>
            <h5>{restaurantDetails.cuisines?.join(', ')}</h5>
            <h5>{restaurantDetails.sla.deliveryTime} mins</h5>
            <h5>{restaurantDetails.avgRating}</h5>
        </div>
    )
}

export default RestaurantCard;