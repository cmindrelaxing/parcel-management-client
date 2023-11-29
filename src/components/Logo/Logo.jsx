import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={"/"}>
                <div className="flex items-center gap-3">
                    <div>
                    <i className=' text-[#FF4800] text-4xl bx bxs-paper-plane' data-aos="fade-right" ></i>
                    </div>
                    <div data-aos="fade-left">
                        <p className="text-lg font-bold underline tracking-wide"><span className="text-[#FF4800]">P</span>arcel</p>
                        <p className="-mt-1 text-xs md:text-sm"><small className="tracking-[0.05rem] font-semibold"><span className="text-[#FF4800]">M</span>anagement</small> <span className="text-[#FF4800]"></span> </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Logo;