
import { useLoaderData } from "react-router-dom";
import Room from "./Room";


const Rooms = () => {
    const loadRooms = useLoaderData()
    console.log(loadRooms)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center my-12">
            {
                loadRooms.map(room => <Room key={room._id} room={room}></Room>)
            }
        </div>
    );
};

export default Rooms;