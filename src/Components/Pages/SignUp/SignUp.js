import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';


const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [data, setData] = useState('');
    const [signUpError, SetSignUpError] = useState();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm();

    const handlesignIn = (data) => {
        SetSignUpError('');
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('successfully signUp');
                const userInfo = {
                    displayName: data.name,
                    
                }
                updateUser(userInfo)
                .then(()=>{
                    saveuser(data);
                })
                
            })
            .catch(err => {
                console.log(err);
                SetSignUpError(err.message)
            })
        
        console.log(data);
    }
   const saveuser = (data) =>{
    const user = {name: data.name, email: data.email, role: data.role};
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data =>{
        console.log('save user',data);
        navigate('/');
    })
   }
    const handlesignIngoogle = (event) =>{

    }
    return (
        <div className='mx-auto px-6 w-[400px] bg-amber-500 py-20 rounded-lg my-6' >
            <h3 className='text-4xl text-center'>SignUp</h3>
            <form onSubmit={handleSubmit(handlesignIn)}>
            <label className='block text-white'>Name</label>
                <input className='w-full py-2 my-3 rounded-lg' {...register("name", {required: "Name is required"})} placeholder="First name" />
                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
            <label className='block text-white'>Email</label>
                <input className='w-full py-2 my-3 rounded-lg' {...register("email", {required: "Email is required"})} placeholder="Email" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            <label className='block text-white'>Password</label>
                <input className='w-full py-2 my-3 rounded-lg' {...register("password", {
                    required: "Password is required", 
                    minLength: {value: 6, message: 'password must be 6 character'},
                     pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong'},
                      })}
                       placeholder="password" />
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <select className='w-full py-2 my-3 rounded-lg' {...register("role", { required: true })}>
                    <option value="Buyer" selected>Buyer</option>
                    <option value="Seller">Seller</option>
                    <option value="Admin">Admin</option>
                </select>
                
                <p>{data}</p>
                <input className='btn btn-warning' type="submit" />
                {
                    signUpError &&
                    <p className='text-red-600'>{signUpError}</p>
                }
                <FaGoogle onClick={handlesignIngoogle} className='mx-auto font-semibold text-3xl'/>
                <p className='text-center'>Already Have Account? <Link className='text-sky-500' to='/login'>signIn</Link></p>
            </form>
        </div>
    );
};

export default SignUp;