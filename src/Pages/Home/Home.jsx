import FeaturesRoom from "../FeaturesRoom/FeaturesRoom";
import Banner from "../Header/Banner/Banner";
import HotelFeatures from "../HotelFeatures/HotelFeatures";
import HotelSummary from "../HotelSummary/HotelSummary";
import News from "../News/News";
import Rooms from "../Rooms/Rooms";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotelSummary></HotelSummary>
            <HotelFeatures></HotelFeatures>
            <FeaturesRoom></FeaturesRoom>
            <Rooms></Rooms>
            <News></News>
        </div>
    );
};

export default Home;