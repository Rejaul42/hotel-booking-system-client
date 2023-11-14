import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBook = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    const {_id, checkIn, checkOut } = loadedData;
    console.log(checkIn, checkOut)

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const checkIn = form.checkIn.value;
        const checkOut = form.checkOut.value;
        console.log(checkIn, checkOut)
        const data ={
            checkIn,
            checkOut
        }

        fetch(`https://hotel-booking-system-server.vercel.app/booked/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Successfully Updated an item!',
                        'You clicked the button!',
                        'success'
                    )
                }
                form.reset()
            })

    }
    return (
        <div>
            <div className="bg-stone-500 p-4 h-[500px] flex justify-center items-center">
                <form onSubmit={handleUpdate}>
                    <div className="flex justify-around gap-4">
                        <div className="space-y-4 bg-stone-900 p-4 rounded-lg">
                            <p className="text-xl text-white">Check-In </p>
                            <input className="px-4 py-3 rounded-md" type="date" defaultValue={checkIn} name="checkIn" id="" />
                        </div>
                        <div className="space-y-4 bg-stone-900 p-4 rounded-lg">
                            <p className="text-xl text-white">Check-Out </p>
                            <input className="px-4 py-3 rounded-md" type="date" defaultValue={checkOut} name="checkOut" id="" />
                        </div>
                    </div>
                    <button className="btn w-full mt-8">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBook;