import PropTypes from 'prop-types'; // ES6
import Room from "./Room";


const Rooms = ({ loadedRooms }) => {
    // const loadRooms = useLoaderData()
    console.log(loadedRooms)
    return (
        <div className="my-16"> 
            <h1 className="text-5xl text-center mb-8">Our Available Room</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center my-12">
            {
                loadedRooms?.map(room => <Room key={room._id} room={room}></Room>)
            }
        </div>
        </div>
    );
};
Rooms.propTypes = {
    loadedRooms: PropTypes.array,
}

export default Rooms;