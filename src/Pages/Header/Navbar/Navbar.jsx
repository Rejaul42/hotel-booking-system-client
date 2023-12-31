import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    const navItems = <>
        <li><NavLink className='hover:text-white hover:bg-stone-700' to="/">Home</NavLink></li>
        <li><NavLink className='hover:text-white hover:bg-stone-700' to="/rooms">Rooms</NavLink></li>
        <li><NavLink className='hover:text-white hover:bg-stone-700' to="/mybooking">My Booking</NavLink></li>

    </>

    return (
        <div className="text-xl text-white">
            <div className="navbar bg-gray-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className="h-12 w-12" src="https://i.ibb.co/9N6Hz3c/times-square-9275290.png" alt="" />HOTEL MOTEL</a>
                </div>

                <div className="navbar-end px-4">
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-4 font-medium ">
                            {navItems}
                        </ul>
                    </div>
                    <div>
                        {
                            user ? <>

                                <div className="flex items-center gap-2">
                                    <div>
                                        {
                                            user.photoURL ? <img className="rounded-full h-12" src={user.photoURL} alt="" /> : <p></p>
                                        }
                                    </div>
                                    <span>
                                        {
                                            user.displayName ? <p>{user.displayName}</p> : <p></p>
                                        }
                                    </span>
                                    <button className="text-xl ml-2 border p-2 rounded-md text-white" onClick={handleLogOut}><Link to="/login"><MdLogout></MdLogout></Link> </button>
                                </div>
                                

                            </> : <a className="btn font-medium"><Link to="/login">Sign In</Link></a>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;