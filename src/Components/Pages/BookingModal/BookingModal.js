import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({category, setModal }) => {
   
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {user} = useContext(AuthContext);
    const {_id, model, productImg, Location, ResalePrice, OrginalPrice, used, PostedDate, SellerName, SellerEmail } = category;
    const [data, setData] = useState('');
    const navigate = useNavigate();
    console.log('booking modal data', SellerEmail);
    const handlebook = (data) =>{
        const bookingInfo = {
            model: data.model,
            ResalePrice: data.ResalePrice,
            used: data.used,
            SellerName: data.SellerName,
            location: data.Location,
            phone: data.phone,
            buyer: user.email,
            SellerEmail: data.SellerEmail,
            product_Id: _id
            

        }
        
        fetch('https://resale-server-market.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
            
        });
        setModal(false);
        toast.success('Product Booked Successfully');
        
        navigate('/');
       
    }
       
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box">
                    <div className="modal-action">
                        <label onClick={()=> setModal(false)} htmlFor="my_modal_6" className="btn">X</label>
                    </div>

                    <div className='px-10'>
                        <form onSubmit={handleSubmit(handlebook)}>
                            
                            <input value={model}  className='w-full py-2 my-3 rounded-lg' {...register("model")} placeholder="Model" />
                            <input value={ResalePrice} className='w-full py-2 my-3 rounded-lg' {...register("ResalePrice")} placeholder="ResalePrice" />
                            <input value={used}  className='w-full py-2 my-3 rounded-lg' {...register("used")} placeholder="used" />
                            <input value={SellerName}  className='w-full py-2 my-3 rounded-lg' {...register("SellerName")} placeholder="SellerName" />
                            <input value={SellerEmail}  className='w-full py-2 my-3 rounded-lg' {...register("SellerEmail")} placeholder="SellerEmail" />
                            
                            <input className='w-full py-2 my-3 rounded-lg' {...register("Location")} placeholder="Location" />
                            <input className='w-full py-2 my-3 rounded-lg' {...register("phone")} placeholder="phone" />
                            <p>{data}</p>
                            <input className='btn btn-warning' type="submit" />
                           
                        </form>
                       
                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;