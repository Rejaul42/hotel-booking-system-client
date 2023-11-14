import PropTypes from 'prop-types'; // ES6
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SingleBooking = ({ booking, setBookings, bookings }) => {
    const { _id, room_type, price_per_night, image_url1, checkIn, checkOut } = booking;
    let date1 = new Date()
    let date2 = new Date(checkIn);
    let compareTime = date2.getDate() - date1.getDate()
    console.log(date1.getDate(), date2.getTime(), compareTime)

    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if(compareTime <= 2){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong, Time expired!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                  return;
            }
            else if (result.isConfirmed) {

                fetch(`https://hotel-booking-system-server.vercel.app/booked/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        
                        
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Product has been deleted.',
                                    'success'
                                )
                                const remeining = bookings?.filter(item => item._id !==_id)
                                setBookings(remeining)
                            }
                        
                    })
            }
        })

    }
    return (
        <div>
            <div className=" hero">
                <div className="flex-col lg:flex-row gap-20">
                    <img src={image_url1} className="max-w-lg rounded-lg shadow-xl" />
                    <div>
                        <h1 className="text-3xl font-bold mt-8">{room_type}</h1>
                        <div className="py-6 space-y-4 text-white font-medium text-xl">
                            <p className='bg-stone-500 rounded-md p-3'>Check-In: {checkIn}</p>
                            <p className='bg-stone-500 rounded-md p-3'>Check-Out: {checkOut}</p>
                        </div>
                        <div>
                            <p className='bg-orange-200 w-40 mb-6 p-3 rounded-md text-xl font-medium'>Price: ${price_per_night}</p>
                        </div>
                        <div className='flex gap-6'>
                            <button className="btn btn-outline text-2xl"><Link to={`/${room_type}/${_id}`}><AiOutlineEdit></AiOutlineEdit></Link></button>
                            <button onClick={() => handleDelete(_id)} className="btn btn-outline text-2xl"><RiDeleteBin5Fill></RiDeleteBin5Fill></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleBooking.propTypes = {
    booking: PropTypes.node,
    bookings: PropTypes.array,
    setBookings: PropTypes.array
}

export default SingleBooking;