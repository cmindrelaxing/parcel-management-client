
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import useAuth from "../../../hooks/useAuth";
import Container from "../Container/Container";
import { useState } from "react";
import useAppUsers from "../../../hooks/useAppUsers";

const NavBar = () => {

    const {user, logOut} = useAuth();
    const [allUsersInfo, ] = useAppUsers();
    const [isOpen, setIsOpen] = useState(false);
    const filteredUsers = allUsersInfo.filter(userG => userG.email === user?.email);
    // console.log(filteredUsers[0]?.name);

    const handleSignOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error));
    };

    // open profile and see menu dashboard
    const openProfile = () => {
        setIsOpen(!isOpen);
    };

    const navOptions = <>
        <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#FF4800]  py-1 px-7    hover:text-white hover:bg-black hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-xl hover:rounded-bl-xl text-white" : " mr-5 ml-5"
        }
        >
        Home
        </NavLink>

        <NavLink
        to="/dashboard/myParcels"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#FF4800]  py-1 px-7    hover:text-white hover:bg-black hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-xl hover:rounded-bl-xl text-white" : " mr-5 ml-5"
        }
        >
        Dashboard
        </NavLink>

            
    </>

    return (

        <div>
            <Container>
            <div className="navbar py-4 px-0 flex max-w-screen-xl justify-between z-50 area mx-auto bg-opacity-20 ">
                <div className=" z-50">
                    <div className="dropdown  z-50">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 py-5">
                        <li className=" space-y-5">
                            {navOptions}
                        </li>
                    </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}

                    <Logo></Logo>
                </div>
                <div className="hidden lg:flex  z-50">
                    <ul className="">
                    <li className="flex justify-between items-center gap-5">
                        {navOptions}
                    </li>
                    </ul>
                </div>
                <div className="flex items-center  z-50">
                    {
                        user  ? 
                        <div>
                            {  
                                <>
                                <div className="flex gap-5 items-center">
                                    <Link>
                                    <i className=' hover:text-yellow-400 text-[#FF4800] bx bxs-bell-ring'></i>
                                    </Link>
                                    {
                                        user?.photoURL ? <>
                                        <img onClick={openProfile} src={user?.photoURL} className=" cursor-pointer rounded-full sm:inline border-box w-8 h-8" alt=""  data-aos="fade-left"/>
                                        </> 
                                        : 
                                        <>
                                        <img onClick={openProfile} src='https://i.ibb.co/PDCHgYT/photo-6275977664170932680-y.jpg' className=" cursor-pointer rounded-full sm:inline border-box w-8 h-8" alt=""  data-aos="fade-left"/>
                                        </>
                                    }
                                </div>
                                {
                                    isOpen && <div className=" rounded-bl-md rounded-br-md top-[80px] xl:top-[78px] right-0 xl:right-10 absolute flex flex-col space-y-5 bg-[#363f4f] min-w-[250px] px-5 py-10">
                                    {/* User ID */}
                                    {
                                        filteredUsers[0]?.name ?
                                        <small className="text-white font-normal flex flex-col">User : {filteredUsers[0]?.name}</small>
                                        :
                                        <small className="text-white font-normal flex flex-col">User : {user?.displayName}</small>
                                    }
                                    {/* bashboard */}
                                    <NavLink
                                    to="/dashboard/myParcels"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-[#FF4800]  py-1 px-7    hover:text-white hover:bg-black hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-xl hover:rounded-bl-xl text-white " : " text-white"
                                    }
                                    >
                                    Dashboard
                                    </NavLink>
                                    {/* logout */}
                                    <button onClick={handleSignOut} className="bg-[#FF4800] text-white py-2 md:py-1 font-semibold hover:bg-black px-6 md:px-8 rounded-full">Sign Out</button>
                                    </div>
                                }
                                </>
                            }
                        </div>
                        :
                        <div className="flex justify-center items-center gap-5">
                        <Link>
                        <i className=' hover:text-[#FF4800] text-yellow-400 bx bxs-bell-ring'></i>
                        </Link>

                        <Link to={'/login'}>
                            <button className="bg-[#FF4800] text-white py-2 md:py-1 font-semibold hover:bg-black hover:text-white px-6 md:px-8 rounded-full">Login</button>
                        </Link>
                        </div>
                    }
                </div>
            </div>
            </Container>
        </div>
    );
};

export default NavBar;