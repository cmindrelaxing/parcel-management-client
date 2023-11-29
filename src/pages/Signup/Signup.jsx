
import toast from 'react-hot-toast';
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from 'react-router-dom';
import SignupImg from "../../assets/blog-1.jpg";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialGoogle from '../../components/SocialLogin/SocialGoogle';
import SocialGithub from '../../components/SocialLogin/SocialGithub';



const Signup = () => {

    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\]).{6,}$/;
        return passwordRegex.test(password);
    };

    const signup = e => {
        e.preventDefault();

        const form  = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const role = form.role.value;
        const signupInfo = {name, email, password, photo, role};
        console.log(signupInfo);

        // Validate email and password
        if (!validateEmail(email)) {
            toast.error('Invalid email format', { position: 'top-left' });
            return;
        }

        if (!validatePassword(password)) {
            toast.error('Please use at least 6 characters, including both letters, numbers and special character for added security.)', { position: 'top-left' });
            return;
        }

        // create a new account
        createUser(email, password)
        .then(result => {
            // console.log(result.user);
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(email, photo)
            .then(() => {
                // console.log('User profile information updated')
                const userInfo = {
                    name: name,
                    email: email,
                    photo: photo,
                    role: role,
                };
                console.log(userInfo);
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId) {
                    toast.success('Account successfully created!')
                    navigate('/');
                    }
                })
            })
            .catch(err => {
                console.error(err);
            });
        })
        .catch(err => {
            console.error(err);
        });
    };
    

    return (
        <div className=" min-h-screen flex items-center justify-center py-10 bg-[#363f4f]">
            <div className="hero-content w-full flex-col-reverse md:flex-row justify-center">

                <div className="text-center mb-2 mt-16 md:mt-0">
                    <img className='lg:w-[85%] md:rounded-tr-full md:rounded-br-full' src={SignupImg} alt=""  data-aos="flip-right" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={signup} className="card-body" data-aos="flip-right">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select Role <span className='text-[#FF4800]'>*</span></span>
                        </label>
                        <select defaultValue="default" className="select w-full focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input-bordered" name='role' required>
                        <option disabled value="default">Please select your role?</option>
                        <option>user</option>
                        <option>delivery</option>
                        </select>
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="URL" name="photo" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn text-white py-2 bg-[#FF4800] hover:bg-black hover:text-white rounded-full">Signup</button>
                        </div>

                        <p className="text-center mt-4"><small>Already have an account <Link to="/login" className="text-blue-600 font-bold">Login</Link></small></p>

                        <div>
                            <h2 className="text-2xl font-semibold text-center dancing">Signup with</h2>
                            <div className="divider">OR</div>
                            <div className="flex justify-between items-center mt-5 gap-3">
                                <SocialGoogle></SocialGoogle>
                                <SocialGithub></SocialGithub>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;