import React, { useContext, useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import { TbAB2 } from "react-icons/tb";
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
import { AiFillCheckCircle } from "react-icons/ai";

const CategoryDetails = ({category}) => {
   
    const {_id ,model, category:wishCategory, productImg, Location, ResalePrice, OrginalPrice, used, PostedDate, SellerName, SellerEmail} = category;
    console.log('bookinmodal cheaking', category);
    const {user} = useContext(AuthContext);
    const [modal, setModal] = useState(false);

    // const [wishLish, setWishList] = useState([]);
    const  [varifyinfo, setverifyinfo] = useState({});
    const [varify, setverifyget] = useState(false);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/vari/${SellerEmail}`)
        .then(res => res.json())
        .then(data => {
            setverifyinfo(data);
            const getdata = data.varify;
            setverifyget(getdata);
            console.log('verify data from vari', varifyinfo, getdata);
        })
        .catch(error => console.error(error))
    },[SellerEmail]);
   
    const handleWishList = () =>{
        const WishListInf = {
            SellerEmail : SellerEmail,
            model : model,
            productImg : productImg,
            ResalePrice : ResalePrice,
            productID: _id,
            Location : Location,
            buyerEmail: user?.email,
            wishCategory: wishCategory
        }

        // console.log(WishListInf);
        // console.log(category);
        fetch('http://localhost:5000/wishlish', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(WishListInf)
        })
        .then(res => res.json())
        .then(data => {
           
            toast.success(`${model} add in wishLish Successfully`);
            console.log('wishlisht data', data);
        })
       
       
        

    }
    
 
    return (
       
      
          <div className="card w-80 bg-base-100 shadow-xl my-4 mx-auto text-start">
            
            <figure><img className='h-52' src={productImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Model: {model} </h2>
                <p>Location: {Location}</p>
                <p>Resale Price: <strong>BDT {ResalePrice}</strong></p>
                <p>Orginal Price: BDT {OrginalPrice}</p>
                <p>Yesrs of Use: {used}</p>
                <p>Posted Date: {PostedDate}</p>
                <p>Seller Name: {SellerName} {varify &&
                    <span><AiFillCheckCircle className='inline-block text-green-600'/></span>}</p>
                
                <div className="card-actions justify-start">
                <button onClick={handleWishList} className='btn btn-warning w-full'><TbAB2 />Add to WishList</button>
                    <label onClick={()=>setModal(true)} htmlFor="my_modal_6" className="btn btn-warning w-full ">Book Now</label>
                </div>
            </div>
            {modal &&
                <BookingModal category={category} setModal={setModal}></BookingModal>
            }
        </div>
      
    );
};

export default CategoryDetails;