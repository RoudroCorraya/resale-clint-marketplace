import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheakOutForm from './CheakOutForm';

const Payment = () => {
    const paymentinfo = useLoaderData();
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPEKEY);
    console.log('stripe key', stripePromise);
    console.log('payment cheak', paymentinfo)
    return (
        <div className='w-96'>
            please pay <strong>BDT {paymentinfo.ResalePrice}</strong> to purchase.
            <div className='my-6'>
                <Elements stripe={stripePromise}>
                    <CheakOutForm paymentinfo={paymentinfo}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;