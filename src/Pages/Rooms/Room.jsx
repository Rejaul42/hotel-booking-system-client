import PropTypes from 'prop-types'; // ES6
import { CgProfile } from 'react-icons/cg';

const Room = ({ room }) => {
    const { _id, room_type, image_url1, occupancy } = room
    return (
        <div>
            <div className="shadow-xl rounded-lg">
                <figure><img className='h-72 w-96' src={image_url1} alt="Shoes" /></figure>
                <div className="absolute text-white -mt-36 ">
                    <div className="p-4  justify-around items-center gap-4">
                        <h2 className=" text-2xl">{room_type}</h2>
                        <button className="btn btn-outline text-white">See Details</button>
                        <p className='flex gap-2 items-center text-2xl'><CgProfile></CgProfile> {occupancy} Guests</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Room.propTypes = {
    room: PropTypes.object,
}

export default Room;