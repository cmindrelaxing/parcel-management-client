import toast from 'react-hot-toast';
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialGithub = () => {
    const {githubLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    // location state
    const from = location?.state?.from?.pathname || "/";

    // Social login and signup with Google
    const githubSignUp = () => {
        githubLogin()
        .then(result => {
            console.log(result.user);
            toast.success('Successfully toasted!')
            // navigation to google sign up page
            // navigate(location?.state ? location?.state : '/');
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                role: "user",
            };
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data.insertedId) {
                    toast.success('Account successfully created!')
                    // navigate(from ? from : '/');
                }
            })
            navigate(from ? from : '/');
        })
        .catch(err => {
            console.error(err);
        });
    };

    return (
        <div>
            <button onClick={githubSignUp} className="flex items-center font-medium bg-[#FF4800] text-white py-2 hover:bg-black px-8 rounded-full"><i className='mr-1 bx bxl-github' ></i><span className="">G</span>ithub</button>
        </div>
    );
};

export default SocialGithub;