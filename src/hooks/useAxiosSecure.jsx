

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'https://parcel-management-server-f42w7wa73.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();

    // requst interceptors to add authentication headers for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        // access token from local storage
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
        // test by console.log
        // console.log('Request stopped successfully by interceptors', token);
        return config;
    }, function(error){
        // Do Something with request error
        return Promise.reject(error);
    });

    // interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error.response.status;
        // console.log('status errror in the interceptors', status);
        // for 401, 403 and 404 logOut the user and clear token by logOut then redirect to the login page
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
      });

    return axiosSecure;
};

export default useAxiosSecure;