
const RestaurantCard = ({ restaurantDetails }) => {
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurantDetails.cloudinaryImageId} />
            <h3>{restaurantDetails.name}</h3>
            <h5>{restaurantDetails.cuisines?.join(', ')}</h5>
            <h5>{restaurantDetails.sla.deliveryTime} mins</h5>
            <h5>{restaurantDetails.avgRating}</h5>
        </div>
    )
}

export default RestaurantCard;