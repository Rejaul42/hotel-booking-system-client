// import { useLoaderData } from "react-router-dom";
import FeaturesRoom from "../FeaturesRoom/FeaturesRoom";
import Banner from "../Header/Banner/Banner";
import HotelFeatures from "../HotelFeatures/HotelFeatures";
import HotelSummary from "../HotelSummary/HotelSummary";
import News from "../News/News";

const Home = () => {
    // const loadedRooms = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <HotelSummary></HotelSummary>
            <HotelFeatures></HotelFeatures>
            <FeaturesRoom></FeaturesRoom>
            <News></News>
        </div>
    );
};

export default Home;