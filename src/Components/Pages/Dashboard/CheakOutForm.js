import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { json } from 'react-router-dom';

const CheakOutForm = ({paymentinfo}) => {
    const stripe = useStripe();
    const elemets = useElements();
    const [carderror, setCardError] = useState('');
    const [Success, setSuccess] = useState('');
    const [TransectionId, setTransectionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [status, setstatus] = useState('');
     const {ResalePrice, buyer, _id, product_Id} = paymentinfo;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://resale-server-market.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ResalePrice}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [ResalePrice]);

    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elemets){
            return;
        }
        const card = elemets.getElement(CardElement);
        if(card === null){
            return;
        }
        const { error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if(error){
            console.log('card error',error);
            setCardError(error.message);
        }
        else{
            setCardError('');
        }
        setSuccess('');
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: buyer,
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError.message);
            return ;
          }
          console.log('paymentIntent', paymentIntent)
          if(paymentIntent.status === "succeeded"){
               
                const payment = {
                    ResalePrice,
                    TransectionId: paymentIntent.id,
                    buyer,
                    bookingId : _id,
                    product_Id
                }
                fetch('https://resale-server-market.vercel.app/payments', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(payment)
                })
                .then(res=> res.json())
                .then(data => {
                    console.log('insert payment', data);
                    if(data.insertedId){
                      
                           
                            setSuccess('Your payment Completed Successfully!');
                            setTransectionId(paymentIntent.id);
                            setstatus('');
                            fetch(`https://resale-server-market.vercel.app/payments/${product_Id}`, {
                                method: 'PATCH',
                                headers: {
                                    'content-type' : 'application/json'
                                },
                                body: JSON.stringify(data)
                            })
                            .then(res => res.json())
                            .then(data => {
                                setstatus(data);
                                toast.success('status inserted');
                            })
                       
                       
                    }
                })
          }
          
    }
    return (
       <>
        <form onSubmit={handleSubmit} className='bg-amber-500 rounded-lg py-10 px-3'>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#000',
                            },
                        },
                        invalid: {
                            color: '#000',
                        },
                    },
                }}
            />
            <button className='btn btn-warning my-6' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
        <p className='text-red-600'>{carderror}</p>
        {
            Success &&
            <div>
                <p className='text-green-600'>{Success}</p>
                <p className='text-green-600'><strong>Your TransectionId : {TransectionId}</strong></p>
            </div>
        }
       </>
    );
};

export default CheakOutForm;