import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://parcel-management-server-d1gjvc726.vercel.app',
    // withCredentials: true,
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;