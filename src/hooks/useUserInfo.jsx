import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUserInfo = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    // console.log(user);

    const {data: userInfo=[], refetch} = useQuery({
        queryKey: ['userInfo'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res.data;
        }
    });

    return [userInfo, refetch];
};

export default useUserInfo;

// if i get the user info then need (1. user useAuth hook from user info 2. fetching from data use useAxiosSecure hook 3. need connection function Tanstack Query )
