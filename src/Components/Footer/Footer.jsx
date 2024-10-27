import logo from '../../assets/logo-footer.png'
import bg from '../../assets/bg-shadow.png'

const Footer = () => {
    return (
        <div className="bg-black relative">

            <div className=' gap-4 w-4/5 mx-auto bg-white rounded-3xl py-20  mb-32 absolute -top-32 left-0 right-0 z-20'
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className='flex flex-col space-y-4 items-center justify-center'>
                    <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                    <p className='text-xl text-gray-500 font-medium'>Get the latest updates and news right in your inbox!</p>
                    <div className="join">
                        <input className="input input-bordered join-item" placeholder="Enter Your Email" />
                        <button className="btn join-item rounded-r-xl bg-green-300">Subscribe</button>
                    </div>
                </div>
            </div>

            <footer className="footer footer-center bg-black text-white pt-44">
                <aside>
                    <img src={logo} alt="" />
                </aside>
            </footer>
            <footer className="footer  text-white py-10 w-4/5 mx-auto">
                <aside>
                    <p className="text-lg font-semibold">
                        About us
                    </p>
                    <p>
                        We are a passionate team <br />
                        dedicated to providing the best <br />
                        services to our customers.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <div className="my-2">
                        <p className="text-lg font-semibold">Subscribe</p>
                        <p>
                            Subscribe to our newsletter for the <br />
                            latest updates.
                        </p>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Enter Your Email" />
                            <button className="btn join-item rounded-r-xl bg-green-300">Subscribe</button>
                        </div>
                    </div>
                </nav>
            </footer>
            <hr />
            <footer className="footer footer-center bg-black text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
}

export default Footer;