import { Link } from "react-router-dom";
import useBooking from "../../hooks/useBooking";
import DashboardContainer from "../Shared/Container/DashboardContainer";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const MyParcels = () => {

    const axiosSecure = useAxiosSecure();
    const {user: userEmail} = useAuth();
    const [booking, refetch] = useBooking() || [];
    const filteredBooking = booking?.filter(user => user.email === userEmail.email) || [];
    const totalAmount = filteredBooking.reduce( (tatal, book) => tatal + parseFloat(book.price) , 0);
    // console.log(isAdmin);

    // Delete 1 booking from UI and database
    const handleDelete = (book) => {
        console.log(book);

        // Take a permission to delete booking from user database and UI
        Swal.fire({
            title: "Please confirm it now?",
            text: "Are you sure want to delete your booking!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`/bookings/${book?._id}`)
            .then(res => {
                if(res.data.deletedCount > 0) {
                    Swal.fire({
                    title: "Deleted!",
                    text: `This booking has been deleted successfully`,
                    icon: "success"
                    });
                }
                refetch();
            });
            }
        });
    };

    return (
        <div>
            <DashboardContainer>
                <div className="pb-20 ">
                    {/* Amount count section */}
                    <div className="md:flex md:justify-between items-center gap-6 mb-10 grid grid-cols-1">
                    <h2 className="font-semibold">My Parcels: {filteredBooking?.length} Booking</h2>
                    <h2 className="font-semibold">Total Amount: {totalAmount} Tk</h2>
                    <Link to={'payment'}>
                    <button className=" text-white bg-[#00ff48] hover:bg-black hover:text-white btn font-semibold">Payment</button>
                    </Link>
                    </div>

                    {/* table */}
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>#</th> 
                                <th>Parcel Type</th> 
                                <th>Booking Date</th> 
                                <th>Request Delivery Date</th> 
                                <th>Approximate Delivery Date</th> 
                                <th>Delivery Men</th> 
                                <th>Booking Status</th>
                                <th>Update</th>
                                <th>Cancel</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                filteredBooking?.map((book, index) => <tr key={book?._id}>
                                    <th>{index + 1}</th> 
                                    <td>{book?.type}</td>
                                    <td>{book?.bookingDate}</td>
                                    <td>{book?.deliveryDate}</td>
                                    <td>{book?.approximate}</td>
                                    <td>{book?.deliveryMen}</td>
                                    <td>
                                        <button className="text-green-400 bg-green-100 hover:bg-black hover:text-white btn font-semibold">{book?.status}</button>
                                    </td>
                                    <td>
                                        {/* TODO: redirect booking information update page */}
                                        <Link to={`updateBooking/${book?._id}`}>
                                        <button 
                                        className="text-yellow-400 bg-yellow-100 hover:bg-black hover:text-white btn font-semibold">
                                        <FaPenAlt></FaPenAlt>
                                        </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button 
                                        // Delete 1 booking from UI and database
                                        onClick={() => handleDelete(book)}
                                        className="text-white bg-red-500 hover:bg-black hover:text-white btn font-semibold">
                                        <FaTrashAlt></FaTrashAlt>
                                        </button>
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

export default MyParcels;