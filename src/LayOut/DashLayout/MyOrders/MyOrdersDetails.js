import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersDetails = ({ MyOrders, i }) => {
    const {_id, model, ResalePrice, SellerName, location, phone } = MyOrders;
    return (




        <tr>
            <th>{i + 1}</th>
            <td className='text-xs'>{model}</td>
            <td className='text-xs'>Name: {SellerName}<br />
                location: {location}<br />
                contact: {phone}
            </td>
            <td className='text-xs'><strong>BDT {ResalePrice}</strong></td>
            
            <td>
                {
                    ResalePrice && !MyOrders.paid &&
                    <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-warning mx-2'>pay</button></Link>
                }
                {ResalePrice && MyOrders.paid &&
                    <button className='btn btn-warning mx-2 text-green-600'>Paid</button>
                }
                
            </td>
        </tr>



    );
};

export default MyOrdersDetails;