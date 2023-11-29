import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useDelivery = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isDelivery} = useQuery({
        queryKey: [user?.email, 'isDelivery'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/delivery/${user.email}`);
            console.log(res.data);
            return res.data?.delivery || false;
        }
    });
    return [isDelivery];
};

export default useDelivery;



