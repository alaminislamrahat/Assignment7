import bg from '../../assets/bg-shadow.png'
import img from '../../assets/banner-main.png'
const Banner = ({hanleCoin}) => {
    return (
        <div className='mt-10'>
            <div
            style={{  backgroundImage: `url(${bg})`,
            backgroundColor : 'black'
        }}
             className=" bg-no-repeat bg-center bg-cover flex flex-col gap-10 items-center justify-center p-10 rounded-xl">
                <img className='w-80' src={img} alt="" />
                <h1 className='text-5xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team </h1>
                <p className='text-3xl font-bold text-white'>Beyond Boundaries Beyond Limits</p>
                <div className='border border-[#E7FE29] p-2 rounded-xl'>
                <button
                onClick={hanleCoin}
                 className='btn bg-[#E7FE29] border border-[#E7FE29] text-xl font-bold'>Claim Free Creadits</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;