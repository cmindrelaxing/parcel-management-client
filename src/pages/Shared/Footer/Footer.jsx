
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

const Footer = () => {
    return (
        <div className='bg-[#222831] pb-10 md:pb-6 pt-14 overflow-hidden'>
            <Container>
                <div>
                <div className=' px-5 lg:px-0 text-white'>
                <div className="area mx-auto grid grid-cols-1 md:grid-cols-3">
                    <div className='mb-16 md:mb-0' data-aos="fade-right">
                        <h2 className='dancing text-white font-semibold text-xl lg:text-3xl'>Contact Us</h2>
                        <div className='mt-5 space-y-2 social'>
                            <p className=' md:text-xs lg:text-sm hover:text-[#FF4800] open_sans'><i className=' mr-2 bx bxs-edit-location'></i> <span>Location</span> </p>
                            <p className=' md:text-xs lg:text-sm hover:text-[#FF4800] open_sans'><i className=' mr-2 bx bxs-phone-call'></i> <span>Call +01 400886906</span> </p>
                            <p className=' md:text-xs lg:text-sm hover:text-[#FF4800] open_sans'><i className=' mr-2 bx bxs-envelope'></i> <span>cmindrelaxing1@gmail.com</span> </p>
                        </div>
                    </div>
                    <div className='text-center mb-16 md:mb-0' data-aos="flip-down">
                        <h2 className='dancing text-white font-semibold text-xl lg:text-3xl'>Parcel Management</h2>
                        <div className='mt-5 space-y-3 social'>
                            <p className=' md:text-xs lg:text-sm open_sans mb-5 md:mb-0'><span>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</span> </p>
                            <div className='flex justify-center gap-3'>
                                <Link className='bg-white text-black hover:text-[#FF4800] w-9 h-9  md:w-8 md:h-8 lg:w-9 lg:h-9 flex justify-center items-center rounded-full'><i className='  md:text-lg lg:text-xl bx bxl-facebook' ></i></Link>
                                <Link className='bg-white text-black hover:text-[#FF4800] w-9 h-9  md:w-8 md:h-8 lg:w-9 lg:h-9 flex justify-center items-center rounded-full'><i className='  md:text-lg lg:text-xl bx bxl-twitter' ></i></Link>
                                <Link className='bg-white text-black hover:text-[#FF4800] w-9 h-9  md:w-8 md:h-8 lg:w-9 lg:h-9 flex justify-center items-center rounded-full'><i className='  md:text-lg lg:text-xl bx bxl-linkedin' ></i></Link>
                                <Link className='bg-white text-black hover:text-[#FF4800] w-9 h-9  md:w-8 md:h-8 lg:w-9 lg:h-9 flex justify-center items-center rounded-full'><i className='  md:text-lg lg:text-xl bx bxl-instagram' ></i></Link>
                                <Link className='bg-white text-black hover:text-[#FF4800] w-9 h-9  md:w-8 md:h-8 lg:w-9 lg:h-9 flex justify-center items-center rounded-full'><i className='  md:text-lg lg:text-xl bx bxl-pinterest' ></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-right' data-aos="fade-left">
                        <h2 className='dancing text-white font-semibold text-xl lg:text-3xl'>Opening Hours</h2>
                        <div className='mt-5 space-y-2 social'>
                            <p className=' md:text-xs lg:text-sm  open_sans'> <span>Everyday</span> </p>
                            <p className=' md:text-xs lg:text-sm  open_sans'> <span>10.00 Am -10.00 Pm</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-8 md:mt-6'>
                <small className='text-white open_sans'>Copyright &copy; Parcel Management. All Rights Reseved.</small>
            </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;