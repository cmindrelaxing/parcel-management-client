import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useBooking from "../../hooks/useBooking";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const CheckoutForm = () => {

    const [errorinfo, setErrorInfo] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [booking, ] = useBooking();
    const totalPrice = booking?.reduce( (tatal, book) => tatal + parseFloat(book.price) , 0);
    // console.log(booking);

    useEffect( () => {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    } , [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card == null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error){
            setErrorInfo(error.message);
            console.error('[error]' , error);
        }else {
            setErrorInfo('');
            console.log('[PaymentMethod]' , paymentMethod);
        }
        // console.log(errorinfo);

        // Confirm the payment method
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                }
            }
        })

        if(confirmError){
            console.log('Confirm error', confirmError);
            setErrorInfo(confirmError.message);
        }else{
            console.log('Payment Intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('Transaction completed successfully id', paymentIntent.id);
                toast.success('Transaction completed successfully id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // Now save the payment history in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(), // Can i change it and convert UTC time by moment js
                    bookingIds: booking?.map(books => books?._id),
                    transactionId: paymentIntent.id,
                    status: 'pending',
                }
                
                // Post confirm payment info and store database
                const res = await axiosSecure.post('/payments', payment);
                console.log('Payment saved', res);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#ffffff',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className="flex items-center font-medium bg-[#FF4800] text-white py-1 hover:bg-black hover:text-white px-10 mt-10 rounded-full" 
            type="submit" 
            disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="mt-5 text-[#FF4800]"><small><strong>{errorinfo}</strong></small></p>
            {
                transactionId && <p className="text-green-600">Your transaction id: {transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;