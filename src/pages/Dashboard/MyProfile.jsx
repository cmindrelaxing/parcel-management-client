import { useForm } from "react-hook-form";
import useAppUsers from "../../hooks/useAppUsers";
import useAuth from "../../hooks/useAuth";
import DashboardContainer from "../Shared/Container/DashboardContainer";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";


// Image hosting key
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MyProfile = () => {

    const { register, handleSubmit, reset } = useForm();
    const [allUsersInfo, refetch] = useAppUsers();
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const filteredUsers = allUsersInfo.filter(userG => userG.email === user?.email);
    // console.log(filteredUsers);

    // Profile upadate button
    const onSubmit = async (data) => {
        // console.log(data);

        // Image upload to profile and recived by imgbb then imgbb give me return new profile image URL
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success) {
            // Now send the profile data to the server with the image URL
            const profileInfo = {
                name: data?.name,
                image: res.data.data.display_url,
            };
            // console.log(profileInfo);

            // Update the profile information sending for database updates
            const profileRes = await axiosPublic.patch(`/users/${filteredUsers[0]?._id}`, profileInfo)
            if(profileRes.data.modifiedCount > 0){
                reset();
                // Show success propup
                toast.success('Updated profile information successfully');
            }
            console.log(profileRes.data);
        }
        refetch();

    };
    

    return (
        <div className="bg-[#363f4f] min-h-screen">
            <DashboardContainer>
                <div>
                    {
                        filteredUsers[0]?.image ? 
                        <img className=" border-8 border-yellow-400 mx-auto rounded-full w-40 h-40 mb-10" src={filteredUsers[0]?.image} alt="" />
                        :
                        <img className=" border-8 border-yellow-400 mx-auto rounded-full w-40 h-40 mb-10" src={user?.photoURL} alt="" />
                    }
                    <div className=" rounded-lg bg-white p-4 md:p-5 lg:p-10 space-y-3">
                        {
                            filteredUsers?.map(userD => (<h2 className=" text-sm font-bold" key={userD._id}>Display name: {userD?.name}</h2>) )
                        }
                        <h2 className=" text-sm font-bold" >Email: {user?.email}</h2>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Name */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Your name</span>
                                    </label>
                                    <input
                                        {...register('name')}
                                        type="text"
                                        placeholder="Type name"
                                        required
                                        className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered w-full" />
                                </div>

                                {/* image upload */}
                                <div className="form-control w-full my-6">
                                    <input {...register('image')} type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" required />
                                </div>

                                {/* submit btn */}
                                <button className="flex items-center font-medium bg-[#FF4800] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full">Update Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
            </DashboardContainer>
        </div>
    );
};

export default MyProfile;