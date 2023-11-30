
import DashboardContainer from "../Shared/Container/DashboardContainer";
import { FaPenAlt, FaUserAlt } from "react-icons/fa";
import useParcels from "../../hooks/useParcels";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import ConfirmDeliveryModal from "../../components/Modal/ConfirmDeliveryModal";

const MyDeliveryList = () => {


    // All users
    const [parcelInfo, ] = useParcels();
    // const {findAllBookings, } = useFindAllBookings();
    const {user: delivery} = useAuth();
    const fitlerBookingUsers = parcelInfo?.filter(user => user?.delivery_email === delivery?.email);
    console.log(delivery, fitlerBookingUsers)

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
                {/* table */}
                <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>#</th> 
                                <th>User{text} Name</th> 
                                <th>Recivers Name</th> 
                                <th>Booked Phone</th>
                                <th>Req. Delivery Date</th> 
                                <th>Approximate D. Date</th> 
                                <th>Rec.{text} Phone</th>
                                <th>Rec.{text} Address</th>
                                <th>Cancel Button</th>
                                <th>Deliver Button</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                fitlerBookingUsers?.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th> 
                                    <td>{user?.name}</td>
                                    <td>{user?.reciverName}</td>
                                    <td>{user?.phone}</td>
                                    <td>{user?.deliveryDate}</td>
                                    <td>{user?.approximate}</td>
                                    <td>{user?.receiverPhone}</td>
                                    <td>{user?.deliveryAddress}</td>
                                    <td>
                                        <button className="text-green-400 bg-green-100 hover:bg-black hover:text-white btn font-semibold"><FaUserAlt></FaUserAlt></button>
                                    </td>
                                    <td>
                                        {/* TODO: redirect booking information update page */}
                                        <button 
                                        onClick={toggleDialog}
                                        className="text-yellow-400 bg-yellow-100 hover:bg-black hover:text-white btn font-semibold">
                                        <FaPenAlt></FaPenAlt>
                                        </button>
                                        
                                        {/* DialogModal component */}
                                        <ConfirmDeliveryModal deliveryMenData={fitlerBookingUsers} bookingUser={user}  open={isDialogOpen} onClose={toggleDialog} />
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

export default MyDeliveryList;