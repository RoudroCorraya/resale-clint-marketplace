import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import DeleteMyproduct from './DeleteMyproductModal';
import { toast } from 'react-hot-toast';

const MyproductDetails = ({ myproduct, i, setmyProductDelete }) => {
    const { _id, model, ResalePrice, SellerName, Location, PostedDate } = myproduct;
    const { setAdvertise, advertise } = useContext(AuthContext);
    
    // console.log('buyer cheak', SellerName);
    // console.log('advertise cheaking', advertise);

    const handleAdvertise = () => {
       
        
        
        const filtering = advertise.find(p => p._id == _id);
        if (!filtering) {
            let addinfo = advertise;
            //    addinfo = [...advertise]

            addinfo.push(myproduct);
            setAdvertise(addinfo);
            console.log('advertise cheaking', advertise);

        }
        else {
            const remove = advertise.filter(p => p._id !== filtering._id);
            setAdvertise(remove);
            console.log('remove cheaking', remove);
        }
    }

   
    return (
        <tr>

            <th>{i + 1}</th>
            <td>{model}</td>
            <td>Name: {SellerName}<br />
                location: {Location}<br />
                Post Date: {PostedDate}
            </td>
            <td><strong>BDT {ResalePrice}</strong></td>

            <td>
                {
                    ResalePrice && !myproduct.status &&
                    <>
                        <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs bg-warning  mx-1'>Unsold</button></Link>
                        <Link><button onClick={handleAdvertise} className='btn btn-xs bg-warning  mx-1'>Advertise</button></Link>
                        <label onClick={()=>setmyProductDelete(myproduct)}  htmlFor="myproductDelete" className="btn btn-xs bg-red-500 mx-1">x</label>

                    </>
                }
                {ResalePrice && myproduct.status &&
                    <button className='btn btn-xs bg-warning mx-2 text-green-600
                    '>Sold</button>
                }


            </td>
            
        </tr>
    );
};

export default MyproductDetails;