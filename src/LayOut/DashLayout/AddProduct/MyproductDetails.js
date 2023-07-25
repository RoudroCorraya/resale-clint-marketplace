import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import DeleteMyproduct from './DeleteMyproduct';
import { toast } from 'react-hot-toast';

const MyproductDetails = ({ myproduct, i }) => {
    const { _id, model, ResalePrice, SellerName, Location, PostedDate } = myproduct;
    const { setAdvertise, advertise } = useContext(AuthContext);
    const [modal, setModal] = useState(false);
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

    const DeleteMyproduct = (pro) => {
        fetch(`http://localhost:5000/myproduct/${pro._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('delete data', data);
                if (data.deletedCount > 0) {
                    toast.success(`${pro.model} deleted Successfully`);
                    // navigate('/dashboard/buyers');
                }
            })
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
                        <label onClick={() => setModal(true)} htmlFor="my_modal_6" className="btn btn-xs bg-red-500 mx-1">x</label>

                    </>
                }
                {ResalePrice && myproduct.status &&
                    <button className='btn btn-xs bg-warning mx-2 text-green-600
                    '>Sold</button>
                }


            </td>
            {
                myproduct && modal &&
                <>
                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">{myproduct.model}</h3>
                            <p className="py-4">This modal works with a hidden checkbox!</p>
                            <div className="modal-action">
                                <label onClick={() => DeleteMyproduct(myproduct)} htmlFor="my_modal_6" className="btn btn-error">Delete</label>
                                <label onClick={() => setModal(false)} htmlFor="my_modal_6" className="btn">Close!</label>
                            </div>
                        </div>
                    </div>

                </>
            }
        </tr>
    );
};

export default MyproductDetails;