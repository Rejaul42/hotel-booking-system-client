import img1 from "../../../assets/Image/modern-studio-apartment-design-with-bedroom-living-space.jpg"
import img2 from "../../../assets/Image/elegant-hotel-room-with-big-bed.jpg"
import img3 from "../../../assets/Image/hammocks-with-palm-trees.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full h-[600px]" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 text-white justify-center">
                    <div className=" space-y-8 text-center">
                        <p>LUXURY HOTEL AND BEST RESORT</p>
                        <hr className="my-4" />
                        <h2 className="text-6xl font-bold">ENJOY A LUXURY <br /> EXPERIENCE</h2>
                        <button className="btn btn-outline text-white">ROOMS E SUITES</button>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-outline  btn-circle text-white mr-5">❮</a>
                    <a href="#slide2" className="btn btn-outline  btn-circle text-white mr-5">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src={img2} className="w-full h-[600px]" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 text-white justify-center">
                    <div className=" space-y-8 text-center">
                        <p>LUXURY HOTEL AND BEST RESORT</p>
                        <hr className="my-4" />
                        <h2 className="text-6xl font-bold">ENJOY A LUXURY <br /> EXPERIENCE</h2>
                        <button className="btn btn-outline text-white">ROOMS E SUITES</button>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-outline btn-circle text-white mr-5">❮</a>
                    <a href="#slide3" className="btn btn-outline btn-circle text-white mr-5">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src={img3} className="w-full h-[600px]" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 text-white justify-center">
                    <div className=" space-y-8 text-center">
                        <p>LUXURY HOTEL AND BEST RESORT</p>
                        <hr className="my-4" />
                        <h2 className="text-6xl font-bold">ENJOY A LUXURY <br /> EXPERIENCE</h2>
                        <button className="btn btn-outline text-white">ROOMS E SUITES</button>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-outline btn-circle text-white mr-5">❮</a>
                    <a href="#slide1" className="btn btn-outline btn-circle text-white mr-5">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;