
import { useState } from "react";
import Room from "./Room";
import { useLoaderData } from 'react-router-dom';


const Rooms = () => {
    const loadData = useLoaderData()
    const [loadedRooms, setLoadedRooms] = useState(loadData);
    const compare = (a, b, ascendingOrder) => {
        if (a < b) {
            return ascendingOrder ? -1 : 1;
        }
        if (a > b) {
            return ascendingOrder ? 1 : -1;
        }
        return 0;
    }

    const handleChange = (value) => {
        if (value == 'none') {
            setLoadedRooms([...loadData])
        } else {
            let toType, toAscending
            switch (value) {
                case 'ascending': toType = true; toAscending = true; break;
                case 'descending': toType = true; toAscending = false; break;
                case 'high': toType = false; toAscending = true; break;
                case 'low': toType = false; toAscending = false; break;
            }
            let current = [...loadData]
            current.sort((a, b) => toType ?
                compare(a._id, b._id, toAscending)
                :
                compare(a.price_per_night, b.price_per_night, toAscending))
            setLoadedRooms([...current])
        }
    }

    // console.log(loadedRooms)
    return (
        <div className="my-16">
            <h1 className="text-5xl text-center mb-8">Our Available Room</h1>
            <form className="text-center">
                <select  onChange={(e) => handleChange(e.target.value)} className="select select-bordered w-full max-w-xs">
                    <option disabled selected value='none'>Sorting by Price</option>
                    <option value="high">Low to Heigh Price</option>
                    <option value="low">Heigh to Low Price</option>
                </select>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center my-12">
                {
                    loadedRooms?.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
        </div>
    );
};


export default Rooms;