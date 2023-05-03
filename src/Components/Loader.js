import Shimmer from "react-shimmer-effect";


const Loader = () => {
    return (
        <div className="shimmer-container">
            <Shimmer>
                <div className="shimmer-restro-card" />
                <div className="shimmer-line" />
                <div className="shimmer-line" />
                <div className="shimmer-line" />
                <div className="shimmer-line" />
            </Shimmer>
        </div>
    )
}

export default Loader;