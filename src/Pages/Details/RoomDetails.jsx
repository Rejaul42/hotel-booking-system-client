import { useLoaderData } from "react-router-dom";
import { BsPersonBoundingBox } from 'react-icons/bs';
import { FaBorderAll } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
// material ui
import Rating from '@mui/material/Rating';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const RoomDetails = () => {
    // const [value, setValue] = React.useState<Number | null>(2);
    const { user } = useContext(AuthContext)
    const email = user?.email;
    const loadedRoom = useLoaderData()
    console.log(loadedRoom)
    const { room_type, description, room_size, price_per_night, occupancy, amenities, image_url1, image_url2, image_url3, availability, reviews, special_offer } = loadedRoom;

    
    const handleBookNow = (e) => {
        e.preventDefault()
        const form = e.target;
        const checkIn = form.checkIn.value;
        const checkOut = form.checkOut.value;
        console.log(checkIn, checkOut)

        const data = { room_type, room_size, description, price_per_night, image_url1, email, checkIn, checkOut }
        console.log(data)

        fetch("http://localhost:5000/booked", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        {
                         html:`
                         <div class="space-y-4">
                         <p class="text-blue-600 text-lg">check-In: ${checkIn}</P>
                         <p class="text-blue-600 text-lg">check-Out: ${checkOut}</P>
                         <p>${description}</p>
                         <p class="text-blue-700 font-bold text-2xl">Price:$${price_per_night}</p>
                         </div>
                         `
                        }
                    )
                }
            })

    }
    return (
        <div className="">
            <p className="text-3xl font-bold mt-12 mb-8">{room_type}</p>
            <div className="flex gap-10">
                <div className="w-2/3">
                    <div className="carousel  h-[500px]">
                        <div id="item1" className="carousel-item w-full">
                            <img src={image_url1} className="w-full" />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src={image_url2} className="w-full" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src={image_url3} className="w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                    </div>
                </div>
                <div className="bg-stone-500 p-4 h-[500px] flex justify-center items-center">
                    <form onSubmit={handleBookNow}>
                        <div className="flex justify-around gap-4">
                            <div className="space-y-4 bg-stone-900 p-4 rounded-lg">
                                <p className="text-xl text-white">Check-In </p>
                                <input className="px-4 py-3 rounded-md" type="date" name="checkIn" id="" />
                            </div>
                            <div className="space-y-4 bg-stone-900 p-4 rounded-lg">
                                <p className="text-xl text-white">Check-Out </p>
                                <input className="px-4 py-3 rounded-md" type="date" name="checkOut" id="" />
                            </div>
                        </div>
                        <button className="btn w-full mt-8">Book Now</button>
                    </form>
                </div>
            </div>
            <div className="w-2/3">
                <p>{description}</p>
                <div className="mt-6 flex justify-around items-center">
                    <p className=" flex flex-col justify-center items-center text-xl">
                        <BsPersonBoundingBox className="text-3xl"></BsPersonBoundingBox> {occupancy} Guests
                    </p>
                    <p className=" flex flex-col justify-center items-center text-xl">
                        <FaBorderAll className="text-3xl"></FaBorderAll> {room_size}
                    </p>
                    <p className=" flex flex-col justify-center items-center text-xl">
                        <BiBed className="text-3xl"></BiBed> ${price_per_night} /per night
                    </p>
                    <hr />
                </div>
                <div className="my-6">
                    <hr className="mb-6" />
                    <h3 className="text-2xl font-medium ">Room Services:</h3>
                    {/* features */}
                    <div className="flex justify-around mt-4">
                        {
                            amenities.map(itm =>
                                <div key={itm.index}>
                                    <div>
                                        <li>{itm}</li>
                                    </div>
                                </div>)
                        }
                    </div>
                    {/* Offer */}
                    <div className="mt-8">
                        <p><span className="text-xl font-medium text-sky-600">Special Offer: </span>{special_offer}</p>
                    </div>
                    {/* Review */}
                    <div className="mt-8 pl-6">
                        <h2 className="text-3xl mb-6 text-center font-bold">Customer Review</h2>
                        <div>
                            {
                                reviews.map(itm => <div key={itm.index}>
                                    <div className="mt-6">
                                        <p className="flex items-center gap-4 text-2xl"><BsPersonCircle></BsPersonCircle>{itm.user}</p>
                                        <p className="ml-8"><Rating name="read-only half-rating" precision={0.5} value={itm.rating} readOnly /></p>
                                        <p><span className="font-medium">Comment:</span> {itm.comment}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;