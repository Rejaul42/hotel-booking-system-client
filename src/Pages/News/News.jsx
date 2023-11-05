
const News = () => {
    return (
        <div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/T1vjr54/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg" className="w-full h-[600px]" />
                <div className="absolute flex gap-10 items-center h-full bg-gradient-to-r from-[#151510] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 text-white">
                    <div className=" space-y-4 ml-12">
                        <p className="text-xl">BUS STATION NEAR</p>
                        <h2 className="text-4xl font-semibold">BEST CITY POSITION</h2>
                        <p className="text-lg">Escape to a world of luxury and relaxation! 🌴✨</p>
                        <p className="text-lg">Indulge in a memorable getaway at HOTEL MOTEL, where your comfort is our top priority. <br /> Picture yourself waking up to breathtaking views, savoring delectable cuisine, and unwinding in style. <br />
                            Whether it is a romantic weekend, a family adventure, or a business trip, we have got you covered. <br /> Your perfect stay begins with us. Do not miss out!
                        </p>
                    </div>
                    <div>
                        <div className="rounded-full flex justify-center text-center items-center bg-stone-500 text-white h-60 w-60">
                            <div className="space-y-4">
                                <p>UP TO</p>
                                <p className="text-6xl">50%</p>
                                <p>ON SELECTED ROOMS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;