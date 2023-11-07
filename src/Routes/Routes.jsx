import Main from "../Layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Rooms from "../Pages/Rooms/Rooms";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/rooms')
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
                
            }
        ]
    }
]);

export default router