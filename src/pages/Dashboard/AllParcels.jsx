import { FaPenAlt } from "react-icons/fa";
import DashboardContainer from "../Shared/Container/DashboardContainer";
import useParcels from "../../hooks/useParcels";
import { useState } from "react";
import DialogModal from "../../components/Modal/DeliveryModal";
import useAppUsers from "../../hooks/useAppUsers";


const AllParcels = () => {

    // All users
    const [allUsersInfo, ] = useAppUsers();
    const filteredUsers = allUsersInfo?.filter(user => user.role === 'delivery') || [];
    // console.log(filteredUsers);

    // Load all the parcel bookings
    const [parcelInfo, ] = useParcels();
    // console.log(parcelInfo);

    // User's text
    const text = "'s";

    // Model codes
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Function to open/close the dialog
    const toggleDialog = () => {
        setIsDialogOpen(prevState => !prevState);
    };

    return (
        <div>
            <DashboardContainer>
                <div>
                    <div>

                    </div>
                    {/* ----------- table ----------- */}
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>#</th> 
                                <th>User{text} Name</th> 
                                <th>User{text} Phone</th> 
                                <th>Booking Date</th>
                                <th>Delivery Date</th> 
                                <th>Cost</th> 
                                <th>Status</th>
                                <th>Manage</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                parcelInfo?.map((book, index) => <tr key={book._id}>
                                    <th>{index + 1}</th> 
                                    <td>{book?.name}</td>
                                    <td>{book?.phone}</td>
                                    <td>{book?.bookingDate}</td>
                                    <td>{book?.deliveryDate}</td>
                                    <td>{book?.price}</td>
                                    <td>
                                        <button className="text-green-400 bg-green-100 hover:bg-black hover:text-white btn font-semibold">{book?.status}</button>
                                    </td>
                                    <td>
                                        {/* TODO: redirect booking information update page */}
                                        
                                        <button 
                                        onClick={toggleDialog}
                                        className="text-yellow-400 bg-yellow-100 hover:bg-black hover:text-white btn font-semibold">
                                        <FaPenAlt></FaPenAlt>
                                        </button>
                                        
                                        {/* DialogModal component */}
                                        <DialogModal deliveryMenData={filteredUsers} bookingUser={book}  open={isDialogOpen} onClose={toggleDialog} />
                                    </td>
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </DashboardContainer>
        </div>
    );
};

export default AllParcels;