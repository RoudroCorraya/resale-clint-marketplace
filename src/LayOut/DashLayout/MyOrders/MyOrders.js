import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useQuery } from 'react-query';
import MyOrdersDetails from './MyOrdersDetails';

const MyOrders = () => {
    const [myorders, setMyorders] = useState([]);
    const { user, SignOut } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://resale-server-market.vercel.app/dashboard/orders?email=${user?.email}`,{
            headers:{
                autorization: `bearer ${localStorage.getItem('accessToken')}`,
                
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 430){
                    SignOut();
                }
                return res.json();
            })
            .then(data => setMyorders(data))

    }, [user?.email])
    console.log('orders', myorders);
    return (
        <div className='mx-4'>
            you have orders : {myorders.length}
            <div className="overflow-x-auto">
                <table className="table sm:table-xs md:table-md lg:table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Model</th>
                            <th>Seller Info</th>
                            <th>Resale Price</th>
                            <th> Action Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((order, i) => <MyOrdersDetails key={order._id} MyOrders={order} i={i}></MyOrdersDetails>)
                        }

                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr> */}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;