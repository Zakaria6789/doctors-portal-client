import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LAt1SHILP2GEsgZEeVOQs6PpD0trZtpOF8kuN6Fdi17fGuZmvPMjP6xe7r9GCZ90JUCfOSUdFAXGWq6XEM1gNLr00a0IvnffL');


const Payment = () => {
    const { id } = useParams();
    const { data: booking, isLoading } = useQuery(['booking', id], () => fetch(`https://stormy-coast-73546.herokuapp.com/booking/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const { treatmentName, price, slotDate, slotTime, patientName } = booking;

    return (

        <div className='px-4 md:px-10 flex justify-center mt-5 md:mt-20'>
            <div className='card w-full md:w-[385px] bg-base-100 shadow-xl'>
                <div className="card w-full md:w-[385px] bg-base-100 shadow-xl mb-5">
                    <div className="card-body">
                        <p className='text-success'>Hello, {patientName}</p>
                        <h2 className="card-title">Please Pay for {treatmentName}</h2>
                        <p>Your Appointment on <span className='text-red-500'>{slotDate}</span> at <span className='text-red-500'>{slotTime}</span></p>
                        <p>Payable Amount : <span className='text-xl text-secondary'>${price}</span></p>
                    </div>
                </div>
                <div className="card w-full md:w-[385px] bg-base-100 shadow-xl">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm booking={booking} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;