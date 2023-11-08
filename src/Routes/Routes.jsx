import Main from "../Layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/Details/RoomDetails";
import MyBooking from "../Pages/MyBooking/MyBooking";
import PrivateRoute from "./PrivetRoute";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>,
                loader: () => fetch('http://localhost:5000/rooms')
            },
            {
                path: "/rooms/details/:id",
                element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: "/mybooking",
                element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
            },
            {
                path: "/:room_type/:id",
                element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/booked/${params.id}`)
            }
        ]
    }
]);

export default router