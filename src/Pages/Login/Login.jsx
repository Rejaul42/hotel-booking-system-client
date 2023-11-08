import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate()
    const location = useLocation();
    const { signInUser, signInGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate(location?.state ? location?.state : '/')
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                navigate(location?.state ? location?.state : '/')
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }
    return (
        <div>
            <div className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/dLVV4Wz/scenic-view-sandy-beach-beach-with-sun-beds-umbrellas-open-against-sea-mountains-hotel-resort-tekiro.jpg" className="w-full" />
                <div className="absolute flex gap-4 lg:gap-16 items-center h-full bg-gradient-to-r from-[#151510] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 text-white">
                    <div className=" space-y-8 ml-4 lg:ml-12">
                        <h2 className="text-2xl lg:text-4xl font-semibold">150+ Rooms to Choose <br /> From</h2>
                        <p className="lg:text-lg">Escape to a world of luxury and relaxation! 🌴✨</p>
                        <p className="">
                            Whether it is a romantic weekend, a family adventure, or a business trip, <br /> we have got you covered. Your perfect stay begins with us. Do not miss out!
                        </p>
                    </div>
                    <div className="flex-grow">
                        <div className="  bg-gradient-to-r from-[#281142] to-[rgba(18, 18, 18, 0.80)] text-white p-16">
                            <div className="lg:space-y-4">
                                <Link to="/"><a className="btn btn-ghost normal-case text-xl"><img className="h-12 w-12" src="https://i.ibb.co/9N6Hz3c/times-square-9275290.png" alt="" />HOTEL MOTEL</a></Link>
                                <form onSubmit={handleSignIn} className="">
                                    <p className="my-4 text-4xl text-center font-semibold">Sign In</p>

                                    <div className="">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" className="input input-bordered w-full text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name="password" className="input input-bordered text-black" required />

                                    </div>
                                    {
                                        errorMessage && <p className="text-red-600 font-semibold">{errorMessage}</p>
                                    }
                                    <div className="form-control mt-6">
                                        <button className="btn bg-stone-500 hover:bg-stone-700 text-white">Sign In</button>
                                    </div>
                                    <div className="mt-4 text flex justify-between items-center">
                                        <p>New in HOTEL MOTEL? <span className="font-medium underline"><Link to="/signup">Sign Up</Link></span></p>
                                        <label className="">
                                            <a href="#" className=" text-white">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div onClick={handleGoogleSignIn} className="mt-8 flex gap-2 items-center text-2xl justify-center btn btn-outline text-white">
                                        <FcGoogle></FcGoogle>
                                        <p>Google Sign In</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;