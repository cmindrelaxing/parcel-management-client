import useAppUsers from "../../hooks/useAppUsers";
import useFindAllBookings from "../../hooks/useFindAllBookings";
import Container from "../Shared/Container/Container";
import CountUp from 'react-countup';

const OurFeatures = () => {

    // Load all bookings information
    const [findAllBookings, ] = useFindAllBookings();
    const [allUsersInfo, ] = useAppUsers();
    const filteredUsers = allUsersInfo?.filter(user => user.role === 'user');
    // console.log(findAllBookings);

    return (
        <div className="overflow-hidden">
            <Container>
                <div className="text-center space-y-5 mt-20 lg:mt-24 mb-10">
                    <h2 className="text-[#ff4800] font-bold text-2xl md:text-3xl lg:text-4xl"  >Our Features</h2>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold capitalize' >Best Logistic Services</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-10 mt-10 mb-20">
                    <div className=" mb-10 md:mb-0 text-center shadow-lg" data-aos="fade-up">
                        <div className="bg-[#ff4800] py-5">
                        <i className=' text-5xl text-white bx bx-package' ></i>
                        </div>
                        <div className=" flex flex-col justify-between space-y-5 mt-5 mb-10 px-2">
                        <p className="text-start text-sm lg:text-base"><span>Highlight safety measures like secure packaging, tracking systems, and insurance options to ensure the safety of parcels during transit.</span></p>
                        <h3 className=" text-xl font-semibold lg:text-2xl">Parcel Safety</h3>
                        </div>
                    </div>
                    <div className=" mb-10 md:mb-0 text-center shadow-lg" data-aos="fade-up">
                        <div className="bg-[#ff4800] py-5">
                        <i className=' text-5xl text-white bx bxs-paper-plane' ></i>
                        </div>
                        <div className=" flex flex-col justify-between space-y-5 mt-5 mb-10 px-2">
                        <p className="text-start text-sm lg:text-base"><span>Emphasize fast and efficient delivery services, possibly with express shipping options or guaranteed delivery times.</span></p>
                        <h3 className=" text-xl font-semibold lg:text-2xl">Super Fast Delivery</h3>
                        </div>
                    </div>
                    <div className=" mb-10 md:mb-0 text-center shadow-lg" data-aos="fade-up">
                        <div className="bg-[#ff4800] py-5">
                        <i className=' text-5xl text-white bx bx-support' ></i>
                        </div>
                        <div className=" flex flex-col justify-between space-y-5 mt-5 mb-10 px-2">
                        <p className="text-start text-sm lg:text-base"><span>Highlight responsive customer support available to assist with parcel inquiries, complaints, or assistance throughout the delivery process.</span></p>
                        <h3 className=" text-xl font-semibold lg:text-2xl">Customer Support</h3>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="space-y-5 mt-20 lg:mt-24 mb-10">
                    <h2 className="text-[#ff4800] font-bold" data-aos="fade-left">GET A QUOTE</h2>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-black font-bold capitalize' data-aos="fade-right">Request A Free Quote</h1>
                </div>
                <div className=" mb-20 grid grid-cols-1 lg:grid-cols-6 lg:gap-10 md:flex flex-col-reverse lg:grid lg:flex-none items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-10 mt-10 mb-10 lg:mt-0 lg:mb-0 lg:col-span-4">
                        <div className=" mb-20 md:mb-0 text-center shadow-lg" data-aos="fade-left">
                            <div className=" py-5">
                            <i className=' text-5xl text-[#ff4800] bx bxs-book-alt' ></i>
                            </div>
                            <div className=" text-center space-y-5 mt-5 mb-10 px-2">
                            <div className=" text-[#ff4800] text-4xl font-bold">
                            <CountUp
                            end={findAllBookings?.length}
                            duration={5}
                            />
                            </div>
                            <h3 className=" text-xl md:text-2xl lg:text-xl font-semibold">Parcel Booked</h3>
                            </div>
                        </div>
                        <div className=" mb-20 md:mb-0 text-center shadow-lg" data-aos="fade-left">
                            <div className=" py-5">
                            <i className=' text-5xl text-[#ff4800] bx bxs-paper-plane' ></i>
                            </div>
                            <div className=" text-center space-y-5 mt-5 mb-10 px-2">
                            <div className=" text-[#ff4800] text-4xl font-bold">
                            <CountUp
                            end={500}
                            duration={5}
                            />
                            </div>
                            <h3 className=" text-xl md:text-2xl lg:text-xl font-semibold">Parcel Delivered</h3>
                            </div>
                        </div>
                        <div className=" mb-10 md:mb-0 text-center shadow-lg" data-aos="fade-left">
                            <div className=" py-5">
                            <i className=' text-5xl text-[#ff4800] bx bx-mouse-alt' ></i>
                            </div>
                            <div className=" text-center space-y-5 mt-5 mb-10 px-2">
                            <div className=" text-[#ff4800] text-4xl font-bold">
                            <CountUp
                            end={filteredUsers?.length}
                            duration={5}
                            />
                            </div>
                            <h3 className=" text-xl md:text-2xl lg:text-xl font-semibold">People Using App</h3>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 flex justify-center items-center">
                        <img className="rounded-xl w-full mx-auto" src="https://i.ibb.co/MNcNLVk/team-4.jpg" alt=""  data-aos="fade-up"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurFeatures;