import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';


const LogIn = () => {

    const {signIn, googleSignUp, updateUser} = useContext(AuthContext);
    const [data, setData] = useState('');
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [loginError, setLogInError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathName || '/';
    //changing title start
useEffect(()=>{
    document.title = 'Resale-SignIn';
}, [])
//changing title end

    const handlesignIn = (data) =>{
        setLogInError('');
        signIn(data.email, data.password)
        .then(res=>{
            const user = res.user;
            console.log('logIn',user);
            getToken(user.email);
            navigate(from, {replace: true});
        })
        .catch(err=>{
            console.error(err.message);
            setLogInError(err.message);
        })
    }

    const getToken = (email) =>{
        const cuurrentUser = {
            email: email
        }
        fetch(`http://localhost:5000/jwt`, {
            method: 'POST',
            headers: {
                
                'content-type' : 'application/json'
            },
            body: JSON.stringify(cuurrentUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('lastone',data);
            localStorage.setItem('accessToken', data.token);
            toast.success('SignIn successfully');
        })
    }
    const handlesignIngoogle = () => {
        googleSignUp()
        .then(res => {
            const user = res.user;
            getToken(user.email);
            console.log('googlesignIn user', user);
            const userInfo = {
                displayName: data.name,
                

            }
            updateUser(userInfo)
            .then(() => {
                navigate('/');
                //save user
                // const googleuser = { name: user.displayName, email: user.email, role: 'Buyer'};
                // console.log('save googleuser', googleuser);
        
        
                // fetch('http://localhost:5000/users', {
                //     method: 'POST',
                //     headers: {
                //         autorization: `bearer ${localStorage.getItem('accessToken')}`,
                //         'content-type': 'application/json'
        
        
                //     },
                //     body: JSON.stringify(googleuser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log('save googleuseruser', data);
                        
                //         navigate('/');
        
                //     })
                //save user
                
            })
        })
        
           
    }
    return (
        <div className='mx-auto px-6 lg:w-[400px] md:w-[400px] sm:w-[300px] bg-amber-500 py-20 rounded-lg my-6' >
            <h3 className='text-4xl text-center'>SignIn</h3>
            <form onSubmit={handleSubmit(handlesignIn)}>
            <label className='block text-white'>Email</label>
                <input className='w-full py-2 my-3 rounded-lg' {...register("email", {required: "Email is required"})} placeholder="Email" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            <label className='block text-white'>Password</label>
                <input className='w-full py-2 my-3 rounded-lg' {...register("password", {
                    required: "Password is required", 
                    minLength: {value: 6, message: 'wrong password'},
                     pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong'},
                      })}
                       placeholder="password" />
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <div>{loginError && <p className='text-red-600'>{loginError}</p>}</div>
                
                
                <p>{data}</p>
                <input className='btn btn-warning' type="submit" />
                <FaGoogle onClick={handlesignIngoogle} className='mx-auto font-semibold text-3xl'/>
                <p className='text-center'>Already Have Account? <Link className='text-sky-500' to='/signup'>SignUp</Link></p>
                
            </form>
        </div>
    );
};

export default LogIn;