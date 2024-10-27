import bg from '../../assets/bg-shadow.png'

const Subscribe = () => {
    return (
        <div>
            <div
            className='mx-auto bg-cover bg-no-repeat flex flex-col gap-4 bg-black items-center justify-center py-16 rounded-lg w-[1100px]'
             style={{backgroundImage : `url(${bg})`}}>
                <h1 className='text-3xl font-bold text-white'>Subscribe to our Newsletter</h1>
                <p className='text-white'>Get the latest updates and news right in your inbox!</p>
                <div className='flex gap-2'>
                <input type="text" placeholder="Type here" className="input border-[#1313134D] border w-full max-w-xs" />
                    <button className='btn bg-[#fff]'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;