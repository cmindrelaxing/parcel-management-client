import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useAdmin from "../hooks/useAdmin";
import useBooking from "../hooks/useBooking";
import useDelivery from "../hooks/useDalivery";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {

    const [menuIconOpen, setMenuIconOpen] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [booking] = useBooking();
    const {user: userEmail} = useAuth();
    const filteredBooking = booking?.filter(user => user.email === userEmail.email) || [];
    // console.log(filteredBooking);
    // console.log(booking);

    // Admin
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isDelivery] = useDelivery();

    // menu open
    const menuOpen = () => {
        setMenuIconOpen(!menuIconOpen);
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex">
            {/* ---------- menu icons ---------- */}
            { 
                <div onClick={menuOpen} className=" flex justify-center items-center w-12 h-12 absolute top-5 right-5 rounded-full text-3xl lg:hidden cursor-pointer bg-yellow-400">
                    {
                        menuIconOpen ? <i className='  text-white bx bx-menu' ></i> 
                        :
                        <i className='  text-white bx bx-x' ></i>
                    }
                </div>
            }

            {/* ---------- sidebar for lg devices || menu hidden small devices small to md ---------- */}
            {
                !sidebarOpen &&
                <div className=" absolute hidden lg:block lg:relative lg:min-w-[250px] bg-[#D1A054]">
                <ul className="menu flex flex-col gap-2 mt-5">
                    {
                        isAdmin
                        ?
                        <>

                        <li>
                        <NavLink
                        to="/dashboard/allParcels"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <i className=' bx bx-package' ></i> All Parcels
                        </NavLink>
                        </li>

                        <li>
                        <NavLink
                        to="/dashboard/allUsers"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <FaUsers></FaUsers> All Users
                        </NavLink>
                        </li>

                        <li>
                        <NavLink
                        to="/dashboard/allDeliveryMen"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <i className='bx bxs-paper-plane' ></i> All Delivery Men
                        </NavLink>
                        </li>

                        <li>
                        <NavLink
                        to="/dashboard/myParcels"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <i className='bx bx-gift' ></i> My Parcels ({filteredBooking?.length})
                        </NavLink>
                        </li>
                        </>
                        :
                        isDelivery
                        ?
                        <>
                        <li>
                        <NavLink
                        to="/dashboard/myDeliveryList"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <i className=' bx bx-package' ></i> My Delivery List
                        </NavLink>
                        </li>

                        <li>
                        <NavLink
                        to="/dashboard/myReviews"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <i className='bx bx-gift' ></i> My Reviews
                        </NavLink>
                        </li>

                        <li>
                        <NavLink
                        to="/dashboard/myParcels"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <i className='bx bx-gift' ></i> My Parcels ({filteredBooking?.length})
                        </NavLink>
                        </li>
                        
                        <li>
                        <NavLink
                        to="/dashboard/myProfile"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <i className='bx bx-user-circle' ></i> My Profile
                        </NavLink>
                        </li>
                        </>
                        :
                        <>
                        <li>
                        <NavLink
                        to="/dashboard/bookAparcels"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <i className=' bx bx-package' ></i> Book a Parcel 
                        </NavLink>
                        </li>
                        
                        <li>
                        <NavLink
                        to="/dashboard/myParcels"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <i className='bx bx-gift' ></i> My Parcels ({filteredBooking?.length})
                        </NavLink>
                        </li>
                        
                        <li>
                        <NavLink
                        to="/dashboard/myProfile"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                        }
                        >
                        <i className='bx bx-user-circle' ></i> My Profile
                        </NavLink>
                        </li>
                        </>
                    }






                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                    <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <FaHome></FaHome> Home
                    </NavLink>
                    </li>
                </ul>
                </div> 
            }
            


            {/* ---------- sidebar for small devices ---------- */}
            {
            sidebarOpen && 
            <div className=" absolute lg:hidden top-20 lg:top-0 right-0 z-20 min-w-20 md:min-w-40 lg:min-w-[250px] bg-[#D1A054]">
            <ul className="menu flex flex-col gap-2 mt-5">
                {
                    isAdmin
                    ?
                    <>
                    <li>
                    <NavLink
                    to="/dashboard/allParcels"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <i className=' bx bx-package' ></i> All Parcels
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                    to="/dashboard/allUsers"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <FaUsers></FaUsers> All Users
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                    to="/dashboard/allDeliveryMen"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <i className=' bx bx-package' ></i> All Delivery Men
                    </NavLink>
                    </li>
                    
                    <li>
                    <NavLink
                    to="/dashboard/myParcels"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <i className='bx bx-gift' ></i> My Parcels ({filteredBooking?.length})
                    </NavLink>
                    </li>
                    </>
                    :
                    isDelivery
                    ?
                    <>
                    <li>
                    <NavLink
                    to="/dashboard/myDeliveryList"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <i className=' bx bx-package' ></i> My Delivery List
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                    to="/dashboard/myReviews"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <i className='bx bx-gift' ></i> My Reviews
                    </NavLink>
                    </li>
                    
                    <li>
                    <NavLink
                    to="/dashboard/myParcels"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <i className='bx bx-gift' ></i> My Parcels ({filteredBooking?.length})
                    </NavLink>
                    </li>
                    </>
                    :
                    <>
                    <li>
                    <NavLink
                    to="/dashboard/bookAparcels"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <i className=' bx bx-package' ></i> Book a Parcel 
                    </NavLink>
                    </li>
                    
                    <li>
                    <NavLink
                    to="/dashboard/myParcels"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <i className='bx bx-gift' ></i> My Parcels ({booking?.length})
                    </NavLink>
                    </li>
                    
                    <li>
                    <NavLink
                    to="/dashboard/myProfile"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                    }
                    >
                    <i className='bx bx-user-circle' ></i> My Profile
                    </NavLink>
                    </li>
                    </>
                }






                {/* shared nav links */}
                <div className="divider"></div>
                <li>
                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-yellow-400 text-white py-1  rounded-tl-xl rounded-br-xl rounded-bl-none rounded-tr-none    hover:bg-yellow-400 hover:text-white hover:rounded-full transition mr-5 ml-5" : " hover:text-white mr-5 ml-5"
                }
                >
                <FaHome></FaHome> Home
                </NavLink>
                </li>
            </ul>
            </div> 
            }
            

            {/* ---------- All page outlet no need change ---------- */}
            <div className="flex-1 bg-[#F6F6F6] overflow-x-auto min-h-screen">
                <Outlet></Outlet>
                <Toaster
                position="top-left"
                reverseOrder={false}
                />
            </div>
        </div>
    );
};

export default Dashboard;