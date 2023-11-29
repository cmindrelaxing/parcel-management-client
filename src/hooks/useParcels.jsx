import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useParcels = () => {

    const axiosPublic = useAxiosPublic();
    const {data: parcelInfo=[], refetch} = useQuery({
        queryKey: ['parcelInfo'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/bookings`)
            return res.data;
        }
    });

    return [parcelInfo, refetch];
};

export default useParcels;

// Used if for all bookings information showing info every where