

const Banner = () => {
    const hero_style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://i.ibb.co/rsKf7zY/header.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 1.9)",
        opacity: "10"
    };

    return (
        <div style={hero_style} className="mb-10 md:px-6 lg:px-20 xl:px-32 overflow-hidden">
            <div className='h-[30vh] md:h-[70vh] flex flex-col justify-center items-center text-center space-y-5'>
                <h2 className="text-[#ff4800] font-bold text-2xl md:text-3xl lg:text-4xl" data-aos="fade-left">Safe & Faster</h2>
                <h1 className='text-3xl md:text-4xl lg:text-7xl text-white font-bold uppercase' data-aos="fade-right">Logistics Services</h1>
                <div className='mt-6' data-aos="fade-left">
                    <input id='input_value' className='outline-none rounded-l-lg py-2 px-2 md:px-4 w-48 md:w-72' type="text" placeholder='Traking ID' style={{ border: "1px solid white", borderRight: "1px solid transparent" }}/>
                    <button className='bg-[#FF444A] text-white font-semibold py-[9px] px-4 md:px-5 rounded-r-lg'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;