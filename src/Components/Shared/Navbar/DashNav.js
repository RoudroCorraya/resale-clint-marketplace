import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ResaleLogo from '../../../Assets/logo/logoResale2.png';
import ResaleLogo2 from '../../../Assets/logo/istockphoto-1318482009-612x612.jpg';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
    const { user, SignOut } = useContext(AuthContext);
    const handleSignOut = () => {
        SignOut()
            .then(() => { })
            .catch(err => console.error(err));
    }
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user?.uid ?
                                <>
                                    <li><Link>Homepage</Link></li>
                                    <li><Link>Portfolio</Link></li>
                                    <li><Link>About</Link></li>
                                    <li><Link to='/dashboard' className=''>DashBoard</Link></li>
                                    <li><label htmlFor="my-drawer-2" className="drawer-button lg:hidden">Open drawer</label></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                               
                                </>
                                :
                                <>
                                    <li><Link>Homepage</Link></li>
                                    <li><Link>Portfolio</Link></li>
                                    <li><Link>About</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    
                                    
                                </>

                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center">

                <Link to='/' className="w-18">
                    <button className='normal-case text-xl'>
                        <img className='w-[100px]' src={ResaleLogo} alt='' />
                    </button>

                </Link>

            </div>
            <div className="navbar-end">
                
                {/* <button className="btn btn-ghost btn-circle">
                    
                    <div className="avatar">
                        <div className="w-[50px] rounded-full">
                            <img src={ResaleLogo2} alt=''/>
                        </div>
                    </div>
                </button> */}
                {
                    user?.uid ?
                        <>
                           
                            <Link to='/login'><button onClick={handleSignOut} className='btn btn-warning mx-2'>SignOut</button></Link>

                        </> :
                        <>
                            <Link to='/login'><button className='btn btn-warning'>SignIn</button></Link>
                        </>
                }


            </div>
        </div >
    );
};

export default Navbar;