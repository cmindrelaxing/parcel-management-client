import Container from "../Shared/Container/Container";
import CountUp from 'react-countup';
import useAppUsers from "../../hooks/useAppUsers";

const TopDeliveryMan = () => {

    // All users
    const [allUsersInfo, ] = useAppUsers();
    const filteredUsers = allUsersInfo?.filter(user => user.role === 'delivery') || [];
    // console.log(filteredUsers);

    return (
        <div className="overflow-hidden">
            <Container>
                <div className="my-20">
                    <h2 className=" text-center text-[#ff4800] font-bold text-2xl md:text-3xl lg:text-4xl">The Top Delivery Man</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10 md:mt-20 gap-5">
                        {
                            filteredUsers?.length > 5 ? (filteredUsers?.slice(0,5).map((deliveryManInfo) => (<div key={deliveryManInfo?._id} className="shadow-lg" data-aos="fade-right">
                            <img className="w-full" src={deliveryManInfo?.photo} alt="" />
                            <div className="p-4 space-y-2">
                            <h3 className="font-semibold text-xl">{deliveryManInfo?.name}</h3>
                            <p className="font-medium text-sm">Delivery: <span className="text-[#ff4800]">
                            <CountUp
                            end={500}
                            duration={5}
                            />    
                            </span></p>
                            </div>
                            </div>)))
                            :
                            filteredUsers?.map((deliveryManInfo) => (<div key={deliveryManInfo?._id} className="shadow-lg" data-aos="fade-right">
                            <img className="w-full" src={deliveryManInfo?.photo} alt="" />
                            <div className="p-4 space-y-2">
                            <h3 className="font-semibold text-xl">{deliveryManInfo?.name}</h3>
                            <p className="font-medium text-sm">Delivery: <span className="text-[#ff4800]">
                            <CountUp
                            end={500}
                            duration={5}
                            />    
                            </span></p>
                            </div>
                            </div>))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopDeliveryMan;