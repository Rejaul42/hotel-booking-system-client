import { GiCarKey } from "react-icons/gi";
import { FaLuggageCart } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
import { IoFastFoodSharp} from "react-icons/io5";
const HotelFeatures = () => {
    return (
        <div className="mt-10 flex items-center justify-center gap-8">
            <div className="flex gap-4 items-center">
                <GiCarKey className="text-7xl"></GiCarKey>
                <div>
                    <p className="font-semibold text-xl">Smart Key</p>
                    <p>It is help to improve security</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <FaLuggageCart className="text-7xl"></FaLuggageCart>
                <div>
                    <p className="font-semibold text-xl">Store Luggage</p>
                    <p>Luggage carry very safely</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <IoFastFoodSharp className="text-7xl"></IoFastFoodSharp>
                <div>
                    <p className="font-semibold text-xl">Room Service</p>
                    <p>Provide premium room service</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <MdCleanHands className="text-7xl"></MdCleanHands>
                <div>
                    <p className="font-semibold text-xl">Disinfection</p>
                    <p>Provide super cleaning service</p>
                </div>
            </div>
        </div>
    );
};

export default HotelFeatures;