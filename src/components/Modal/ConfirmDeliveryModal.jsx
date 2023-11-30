import { useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import PropTypes from 'prop-types';
// import useAxiosPublic from '../../hooks/useAxiosPublic';
// import toast from 'react-hot-toast';
// import axios from 'axios';

const ConfirmDeliveryModal = ({ open, onClose, deliveryMenData, bookingUser }) => {
    // Set a default value based on the first delivery man
    const defaultDeliveryMan = deliveryMenData.length > 0 ? deliveryMenData[0]?._id : '';
    const [selectedDeliveryMan, setSelectedDeliveryMan] = useState(defaultDeliveryMan);
    const [approximateDateSelected, setApproximateDateSelected] = useState('');

    const handleDeliveryManChange = (event) => {
        setSelectedDeliveryMan(event.target.value);
    };

    const approximateDate = (event) => {
        setApproximateDateSelected(event.target.value);
    };

    // const axiosPublic = useAxiosPublic();
    const approximateDateInfo = {
        approximate: approximateDateSelected,
    };

    const confirmDeliveryMan = () => {
        // Find the selected delivery man's data based on the selected value
        const selectedDeliveryManData = bookingUser.find((man) => man?._id === selectedDeliveryMan);
        // Save the selected delivery man's data to the database or perform necessary actions
        // Example: Save to the database using an API call or perform state update
        // saveToDatabase(selectedDeliveryManData);
        
        console.log(selectedDeliveryManData, bookingUser, approximateDateInfo);
        const stractureData = {
            // book_name: bookingUser.name,
            // book_id: bookingUser._id,
            // book_email: bookingUser.email,
            // book_deliveryDate: bookingUser.deliveryDate,
            // book_deliveryAddress: bookingUser.deliveryAddress,
            // book_bookingDate: bookingUser.bookingDate,
            // book_parcelWight: bookingUser.parcelWight,
            // book_phone: bookingUser.phone,
            // book_price: bookingUser.price,
            // book_receiverPhone: bookingUser.receiverPhone,
            // book_reciverName: bookingUser.reciverName,
            // book_type: bookingUser.type,
            // book_status: bookingUser.status,
            // delivery man data
            ...bookingUser,
            ...selectedDeliveryManData,
            ...approximateDateInfo,
            // delivery_name: selectedDeliveryManData.name,
            // delivery_email: selectedDeliveryManData.email,
            // delivery_photo: selectedDeliveryManData.photo,
            // delivery_role: selectedDeliveryManData.role,
            // delivery_id: selectedDeliveryManData._id,
        };
        console.log(stractureData);

        // Send data mongodb
        // axios.patch(`https://parcel-management-server-d1gjvc726.vercel.app/bookings/${bookingUser._id}`, stractureData)
        // .then(res => {
        //   console.log(res.data);
        //   if (res.data.modifiedCount > 0) {
        //     toast.success('Booking delivery processing now');
        //   }
        // })
        // .catch(error => {
        //   console.error(error);
        //   // Handle errors here
        // });

        // Close the dialog
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Select Delivery man for service</DialogTitle>
            <DialogContent>
                <form>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Choice one <span className='text-[#FF4800]'>*</span></span>
                        </label>
                        <Select value={selectedDeliveryMan} onChange={handleDeliveryManChange} className="select w-full focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input-bordered" required>
                            <MenuItem value="">Please select a delivery man</MenuItem>
                            {deliveryMenData.map((man) => (
                                <MenuItem key={man?._id} value={man?._id}>
                                    {man?.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </div> */}
                    <div className="form-control">
                        <select value={selectedDeliveryMan} onChange={handleDeliveryManChange} defaultValue="default" className="select w-full focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input-bordered" name='role' required>
                        <option disabled value="default">Confirm Status</option>
                        <option>processing</option>
                        <option>delivered</option>
                        </select>
                        </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Approximate delivery Date</span>
                        </label>
                        <input onChange={approximateDate} type="date" placeholder="Approximate delivery Date" name="approximateDate" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                    </div>
                </form>
            </DialogContent>
            <DialogActions
                sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                 }}
            >
                <Button 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'inherit',
                    fontWeight: '500',
                    backgroundColor: 'orange',
                    color: 'white',
                    py: 1,
                    px: 3,
                    borderRadius: 'full',
                    '&:hover': {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                }}
                onClick={confirmDeliveryMan}>Delivery Man</Button>
                <Button 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'inherit',
                    fontWeight: '500',
                    backgroundColor: '#FF4800',
                    color: 'white',
                    py: 1,
                    px: 3,
                    borderRadius: 'full',
                    '&:hover': {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                }}
                onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

ConfirmDeliveryModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    deliveryMenData: PropTypes.any.isRequired,
    bookingUser: PropTypes.any.isRequired,
};

export default ConfirmDeliveryModal;
