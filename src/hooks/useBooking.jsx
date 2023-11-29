
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBooking = () => {
    // tanStack query by load bookings item from database
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: booking=[], refetch} = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?email=${user?.email}`)
            return res.data;
        }
    })
    return [booking, refetch];
};

export default useBooking;

// if i get the user info then need (1. user useAuth hook from user info 2. fetching from data use useAxiosSecure hook 3. need connection function Tanstack Query )
