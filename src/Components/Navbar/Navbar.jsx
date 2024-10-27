import coinPic from '../../assets/133740038_10243319.png'

const Navbar = ({coin}) => {
    const navlinks = <>
        <li>Home</li>
        <li>Picture</li>
        <li>Team</li>
        <li>SChedules</li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 gap-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl "><img src="/src/assets/logo.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal px-1 flex gap-10">
                        {navlinks}
                    </ul>
                </div>
                <div className=" ">
                    <a className="btn"><span>{coin}M</span>Coin<img className='w-5' src={coinPic} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;