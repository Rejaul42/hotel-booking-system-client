
const HotelSummary = () => {
    return (
        <div className="flex  mt-16 p-8">
            <div className="flex-1">
                <img className="h-[600px] w-[400px] relative pl-4" src="https://i.ibb.co/M6YJ4hf/beautiful-umbrella-chair-around-swimming-pool-hotel-resort.jpg" alt="" />
                <div className="-mt-36 absolute">
                    <div className="h-40 w-40 bg-stone-500 text-white flex justify-center items-center">
                        <div className="space-y-3">
                            <h1 className="text-7xl">+76</h1>
                            <p>BIG SUITES</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <p className="mb-6">H O T E L <span className="ml-4"> </span> B A Y V I E W</p>
                <h1 className="text-7xl mb-8">Relax in our <br /> Hotel Resort</h1>
                <div className="grid grid-cols-2 gap-8">
                    <p>Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.</p>
                    <p>Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.</p>
                    <p>Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui  nec leo condimentum, et euismod mi mollis.</p>
                    <p>Curabitur a fringilla eros. Pellentesque eu interdum nulla. Pellentesque porttitor dui nec leo condimentum, et euismod mi mollis.</p>
                </div>
                <div className="mt-12 flex gap-4 items-center">
                    <img className="w-20 h-20 rounded-full" src="https://i.ibb.co/M9znFNr/handsome-bearded-businessman-rubbing-hands-having-deal.jpg" alt="" />
                    <div>
                        <p className="font-semibold">Andrew Stuart</p>
                        <p className="text-slate-500">Hotel Manager</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelSummary;