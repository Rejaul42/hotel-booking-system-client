import FeaturesRoom from "../FeaturesRoom/FeaturesRoom";
import Banner from "../Header/Banner/Banner";
import HotelFeatures from "../HotelFeatures/HotelFeatures";
import HotelSummary from "../HotelSummary/HotelSummary";
import News from "../News/News";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotelSummary></HotelSummary>
            <HotelFeatures></HotelFeatures>
            <FeaturesRoom></FeaturesRoom>
            <p>This is home</p>
            <News></News>
        </div>
    );
};

export default Home;