import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantDetails }) => {
    return (
        <div className='bg-yellow-200 m-4 w-52 '>
            <img className=" h-48" src={IMAGE_URL + restaurantDetails.cloudinaryImageId} />
            <h3>{restaurantDetails.name}</h3>
            <h5>{restaurantDetails.cuisines?.join(', ')}</h5>
            <h5>{restaurantDetails.sla.deliveryTime} mins</h5>
            <h5>{restaurantDetails.avgRating}</h5>
        </div>
    )
}

export default RestaurantCard;