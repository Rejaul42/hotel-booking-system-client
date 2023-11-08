import { useLoaderData } from "react-router-dom";


const UpdateBook = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    return (
        <div>
            <p>Update</p>
        </div>
    );
};

export default UpdateBook;