import { Link } from "react-router-dom";
import useAppUsers from "../../hooks/useAppUsers";
import DashboardContainer from "../Shared/Container/DashboardContainer";
import { FaPenAlt, FaUserAlt } from "react-icons/fa";
import useParcels from "../../hooks/useParcels";

const AllUsers = () => {


    // All users
    const [allUsersInfo, ] = useAppUsers();
    const [parcelInfo, ] = useParcels();
    const filteredUsers = allUsersInfo?.filter(user => user.role === 'user');
    const combinedResults = [...filteredUsers, ...parcelInfo];
    
    /**
     * if needed upder codes then can be used 
    */ 
    // =================================================================
    // const emailToMatch = `${parcelInfo?.name}`;
    // filteredUsers.filter(user => user.email === emailToMatch);
    // parcelInfo.filter(user => user.email === emailToMatch);
    // const filteredUsers1 = filteredUsers.filter(user => user.email === emailToMatch);
    // const filteredUsers2 = parcelInfo.filter(user => user.email === emailToMatch);
    // console.log(filteredUsers1, filteredUsers2, combinedResults);
    // =================================================================

    // User's text
    const text = "'s";

    return (
        <div>
            <DashboardContainer>
                {/* table */}
                <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>#</th> 
                                <th>User{text} Name</th> 
                                <th>User{text} Phone</th> 
                                <th>Parcel Booked</th>
                                <th>Total Spent Amount</th> 
                                <th>Delivery Men</th> 
                                <th>Admin</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                combinedResults?.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th> 
                                    <td>{user?.name}</td>
                                    <td>{user?.phone}</td>
                                    <td>{user?.approximate}</td>
                                    <td>{user?.price}</td>
                                    <td>
                                        <button className="text-green-400 bg-green-100 hover:bg-black hover:text-white btn font-semibold"><FaUserAlt></FaUserAlt></button>
                                    </td>
                                    <td>
                                        {/* TODO: redirect booking information update page */}
                                        <Link>
                                        <button 
                                        className="text-yellow-400 bg-yellow-100 hover:bg-black hover:text-white btn font-semibold">
                                        <FaPenAlt></FaPenAlt>
                                        </button>
                                        </Link>
                                    </td>
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
            </DashboardContainer>
        </div>
    );
};

export default AllUsers;