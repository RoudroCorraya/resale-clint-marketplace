import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useQuery } from 'react-query';
import MyOrdersDetails from './MyOrdersDetails';

const MyOrders = () => {
    const [myorders, setMyorders] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyorders(data))

    }, [user?.email])
    console.log('orders', myorders);
    return (
        <div className='mx-4'>
            you have orders : {myorders.length}
            <div className="overflow-x-auto">
                <table className="table">
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