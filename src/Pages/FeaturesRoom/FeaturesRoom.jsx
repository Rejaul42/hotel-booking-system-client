
const FeaturesRoom = () => {
    return (
        <div className="mt-12">
            <div className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/s5QZrtG/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai.jpg" className="w-full " />
                <div className="absolute text-center h-full text-white  left-0 right-5">
                    <div className="">
                        <div className="text-center mt-8">
                            <p>OUR ROOM PRICES</p>
                            <h1 className="text-7xl">The Best Prices</h1>
                        </div>
                        <div className="flex justify-center items-center mt-12">
                            <div className="bg-white text-black p-16 space-y-6">
                                <h2 className="text-3xl">Single Room</h2>
                                <p className="text-2xl">$ <span className="text-6xl">45</span> / night</p>
                                <p>Proin lacinia vehicula amet <br />
                                    Lorem ipsum dolor sit amet <br />
                                    Morbi lacinia sagittis acum <br />
                                    consectetur adipiscing elit
                                </p>
                                <button className="bg-stone-500 hover:bg-stone-700 btn text-white">Book Now</button>
                            </div>
                            <div className="bg-stone-500 p-16 space-y-6">
                                <h2 className="text-3xl">Small Suite</h2>
                                <p className="text-2xl">$ <span className="text-6xl">55</span> / night</p>
                                <p>
                                    Proin lacinia vehicula amet <br />
                                    Lorem ipsum dolor sit amet <br />
                                    Morbi lacinia sagittis acum <br />
                                    consectetur adipiscing elit <br />
                                    Proin lacinia vehicula amet <br />
                                    Proin lacinia vehicula amet
                                </p>
                                <button className="bg-slate-950 hover:bg-slate-800 py-3 px-4 rounded-md text-white">Book Now</button>
                            </div>
                            <div className="bg-white text-black p-16 space-y-6">
                                <h2 className="text-3xl">Apartment</h2>
                                <p className="text-2xl">$ <span className="text-6xl">72</span> / night</p>
                                <p>Proin lacinia vehicula amet <br />
                                    Lorem ipsum dolor sit amet <br />
                                    Morbi lacinia sagittis acum <br />
                                    consectetur adipiscing elit
                                </p>
                                <button className="bg-stone-500 hover:bg-stone-700 btn text-white">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesRoom;