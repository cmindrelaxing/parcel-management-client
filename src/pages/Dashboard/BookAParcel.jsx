
import DashboardContainer from "../Shared/Container/DashboardContainer";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useUserInfo from "../../hooks/useUserInfo";

const BookAParcel = () => {

    const {user} = useAuth();
    const [userInfo, ] = useUserInfo();
    const axiosPublic = useAxiosPublic();

    // Today date
    const today = new Date();

    // Price calulations by kg
    const [countPrice, setCountPrice] = useState();

    const calculateKg = (e) => {
        e.preventDefault();
        const pricekg = e.target.value;
        // console.log(pricekg); 
        if(pricekg < 2) {
            let priceFixed = 50;
            setCountPrice(priceFixed);
        }else if(pricekg <= 2) {
            let priceFixed = 100;
            setCountPrice(priceFixed);
        }else if(pricekg > 2) {
            let priceFixed = 200;
            setCountPrice(priceFixed);
        }
    };

    // Booking form
    const bookingBtn = (e) => {
        e.preventDefault();

        const form = e.target;
        const name =  form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const type = form.type.value;
        const parcelWight = form.parcelWight.value;
        const reciverName = form.reciverName.value;
        const receiverPhone = form.receiverPhone.value;
        const deliveryAddress = form.deliveryAddress.value;
        const deliveryDate = form.deliveryDate.value;
        const price = form.price.value;
        const addressLatitude = form.addressLatitude.value;
        const addressLongitude = form.addressLongitude.value;
        const bookingDate = form.bookingDate.value;
        const status = "pending";

        const bookingInfo = {name, email, phone, type, parcelWight, reciverName, receiverPhone, deliveryAddress, deliveryDate, price, addressLatitude, addressLongitude, bookingDate, status};
        console.log(bookingInfo);

        // Make a booking
        axiosPublic.post('/bookings', bookingInfo)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                toast.success('Thanks, your booking is successfully');
            }
        })

    };

    return (
        <div className="bg-[#363f4f] w-full pb-20">
            <DashboardContainer>
            <p className=" text-white">New Booking ...</p>

            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 mt-10">
                <form onSubmit={bookingBtn} className="card-body"  data-aos="flip-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" defaultValue={userInfo?.name} className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" defaultValue={user?.email} className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number" placeholder="Phone Number" name="phone" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Parcel Type</span>
                        </label>
                        <input type="text" placeholder="Parcel Types" name="type" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Parcel Weight (kg)</span>
                        </label>
                        <input onChange={calculateKg} type="number" placeholder="Example: 1kg" name="parcelWight" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Receiver Name</span>
                        </label>
                        <input type="text" placeholder="Receiver Name" name="reciverName" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Receiver Phone Number</span>
                        </label>
                        <input type="number" placeholder="Receiver Phone Number" name="receiverPhone" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Parcel Delivery Address</span>
                        </label>
                        <input type="text" placeholder="Delivery Address" name="deliveryAddress" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Booking Date</span>
                        </label>
                        <input type="text" placeholder="Booking date" defaultValue={today} name="bookingDate" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Price" name="price" defaultValue={countPrice} className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Requested Delivery Date</span>
                        </label>
                        <input type="date" placeholder="Delivery Date" name="deliveryDate" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Delivery Address Latitude</span>
                        </label>
                        <input type="text" placeholder="Address Latitude" name="addressLatitude" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" />
                        </div>
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Delivery Address Latitude</span>
                        </label>
                        <input type="text" placeholder="Address Longitude" name="addressLongitude" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                    <button className="btn text-white py-2 bg-[#FF4800] hover:bg-black hover:text-white rounded-full">Submit</button>
                    </div>
                </form>
            </div>
            </DashboardContainer>
        </div>
    );
};

export default BookAParcel;