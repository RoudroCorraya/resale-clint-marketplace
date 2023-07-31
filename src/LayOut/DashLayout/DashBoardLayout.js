import React, { useContext } from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import DasNav from '../../Components/Shared/Navbar/DashNav';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../Hook/UseAdmin';

import useSeller from '../../Hook/UseSellers';
import useBuyer from '../../Hook/useBuyer';







const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [seller] = useSeller(user?.email);
    const [buyer] = useBuyer(user?.email);
    console.log('buyer',buyer);
  
    
    

    return (
        <div>

            <DasNav></DasNav>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-80 md:w-80 sm:w-1/2 h-full bg-base-200 text-base-content">
                    
                     {
                        buyer &&
                        <>
                        <li><Link to='/dashboard/myorders'>My orders</Link></li>
                        <li><Link to={`/dashboard/wishlist/${user.email}`}>My WishList</Link></li>
                        </>
                     }
                         

                        {
                            isAdmin && 
                            <>
                            <li><Link to='/dashboard/sellers'>All Seller</Link></li>
                            <li><Link to='/dashboard/buyers'>All Buyer</Link></li>
                            </>
                            
                          
                        }
                        {
                            seller &&
                            <>
                             <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                             <li><Link to={`/dashboard/categories/${user.email}`}>My Products</Link></li>
                             <li><Link to={`/dashboard/mybuyerfind/${user.email}`}>My Buyers</Link></li>
                            
                            
                            </>
                        }

                        




                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;