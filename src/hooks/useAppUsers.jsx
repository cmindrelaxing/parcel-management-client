
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAppUsers = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allUsersInfo = [], refetch } = useQuery({
        queryKey: ['allUsersInfo'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`);
            return res.data;
        },
    });

    return [allUsersInfo, refetch];
};

export default useAppUsers;
