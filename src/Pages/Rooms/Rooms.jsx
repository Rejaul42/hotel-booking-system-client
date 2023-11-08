
import Room from "./Room";
import { useLoaderData } from 'react-router-dom';


const Rooms = () => {
    const loadRooms = useLoaderData()
    // console.log(loadedRooms)
    return (
        <div className="my-16"> 
            <h1 className="text-5xl text-center mb-8">Our Available Room</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center my-12">
            {
                loadRooms?.map(room => <Room key={room._id} room={room}></Room>)
            }
        </div>
        </div>
    );
};


export default Rooms;