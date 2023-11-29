import { Link } from "react-router-dom";
import useAppUsers from "../../hooks/useAppUsers";
import DashboardContainer from "../Shared/Container/DashboardContainer";
import { FaPenAlt } from "react-icons/fa";

const AllDeliveryMen = () => {

    // All users
    const [allUsersInfo, ] = useAppUsers();
    const filteredUsers = allUsersInfo?.filter(user => user.role === 'delivery') || [];
    // console.log(allUsersInfo);

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

                                filteredUsers?.map((delivery, index) => <tr key={delivery._id}>
                                    <th>{index + 1}</th> 
                                    <td>{delivery?.name}</td>
                                    <td>{delivery?.phone}</td>
                                    <td>{delivery?.approximate}</td>
                                    <td>{delivery?.price}</td>
                                    <td>
                                        <button className="text-green-400 bg-green-100 hover:bg-black hover:text-white btn font-semibold">Pending</button>
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

export default AllDeliveryMen;