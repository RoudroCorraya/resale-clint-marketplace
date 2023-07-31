import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState('');
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const imagehostkey = process.env.REACT_APP_IMAGEBB_KEY;
    console.log('image host key', imagehostkey);
    const [varify, setveryfy] = useState({});
    console.log('berify cheak',varify);

    const addProduct = (data) =>{
        const productImg = data.productImg[0];
        const formData = new FormData();
        
        formData.append('image', productImg)
        const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageData => {
            console.log('imageData',imageData);
            if(imageData.success){
                const productImagehosted = imageData.data.url;
                const addProductinfo = {
                    category: data.category,
                    model : data.model,
                    productImg: productImagehosted,
                    Location: data.Location,
                    ResalePrice: data.ResalePrice,
                    OrginalPrice: data.OrginalPrice,
                    used : data.used,
                    PostedDate: data.PostedDate,
                    SellerName: data.SellerName,
                    SellerEmail: user.email,
                    varify,
                }
                fetch('http://localhost:5000/dashboard/addproduct', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(addProductinfo)
                })
                .then(res=> res.json())
                .then(data => {
                    userverifycheak(user.email);
                    console.log('adding productinfo',data);
                    navigate(`/categories/${addProductinfo.category}`);
                    toast.success('product added successfully');
                   
                  
                    
                })
                
            }
        })
        console.log('info adproduct', data);
        const userverifycheak = (email) =>{
            fetch(`http://localhost:5000/userverifycheak/${email}`)
            .then(res=> res.json())
            .then(data => {
                console.log('inuserverifycheak ', data);
                setveryfy(data);
            })
        }
       
    }

    return (
        <div className='mx-10 px-6 lg:w-[400px] md:w-[400px] sm:w-[300px] bg-amber-500 py-20 rounded-lg my-6' >

            {/* <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}> */}

           
            <h3 className='text-4xl text-center'>SignUp</h3>
            <form onSubmit={handleSubmit(addProduct)}>
            <select className='w-full py-2 my-3 rounded-lg' {...register("category", { required: true })}>
                    <option value="SelectCategory" selected>Please Select Category</option>
                    <option value="LG">LG</option>
                    <option value="Samsung">Samsung</option>
                    <option value="walton">walton</option>
                </select>
            
                <input className='w-full py-2 my-3 rounded-lg' {...register("model", {required: "Model is required"})} placeholder="Model" />
                {errors.model && <p className='text-red-600'>{errors.model?.message}</p>}
                <input type='file' className='w-full py-2 my-3 rounded-lg' {...register("productImg", {required: "productImg is required"})} placeholder="Product Image" />
                {errors.productImg && <p className='text-red-600'>{errors.productImg?.message}</p>}
                <input className='w-full py-2 my-3 rounded-lg' {...register("Location", {required: "Location is required"})} placeholder="Location" />
                {errors.Location && <p className='text-red-600'>{errors.Location?.message}</p>}
                <input className='w-full py-2 my-3 rounded-lg' {...register("ResalePrice", {required: "ResalePrice is required"})} placeholder="ResalePrice" />
                {errors.ResalePrice && <p className='text-red-600'>{errors.ResalePrice?.message}</p>}
                <input className='w-full py-2 my-3 rounded-lg' {...register("OrginalPrice", {required: "OrginalPrice is required"})} placeholder="OrginalPrice" />
                {errors.OrginalPrice && <p className='text-red-600'>{errors.OrginalPrice?.message}</p>}
                <input className='w-full py-2 my-3 rounded-lg' {...register("used", {required: "used is required"})} placeholder="used" />
                {errors.used && <p className='text-red-600'>{errors.used?.message}</p>}
                <input className='w-full py-2 my-3 rounded-lg' {...register("PostedDate", {required: "PostedDate is required"})} placeholder="PostedDate" />
                {errors.PostedDate && <p className='text-red-600'>{errors.PostedDate?.message}</p>}
                <input className='w-full py-2 my-3 rounded-lg' {...register("SellerName", {required: "SellerName is required"})} placeholder="SellerName" />
                {errors.SellerName && <p className='text-red-600'>{errors.SellerName?.message}</p>}
           
                
                
                <p>{data}</p>
                <input className='btn btn-warning' type="submit" />
                
                </form>
        </div>
    );
};

export default AddProduct;