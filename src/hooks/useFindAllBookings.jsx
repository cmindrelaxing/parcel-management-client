import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFindAllBookings = () => {

    const axiosPublic = useAxiosPublic();
    const {data: findAllBookings=[], refetch} = useQuery({
        queryKey: ['findAllBookings', 'refetch'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/bookings`)
            return res.data;
        }
    });

    return [findAllBookings, refetch];
};

export default useFindAllBookings;