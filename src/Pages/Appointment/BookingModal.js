import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const handleBooking = (event) => {
        event.preventDefault();
        const slotDate = event.target.date.value;
        const slotTime = event.target.slot.value;
        const treatmentName = name;
        const patientPhone = event.target.phone.value;
        const patientEmail = event.target.email.value;
        const booking = {
            treatmentId: _id,
            treatmentName,
            slotDate,
            slotTime,
            patientName: user?.displayName,
            patientEmail,
            patientPhone

        }
        fetch('https://stormy-coast-73546.herokuapp.com/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTreatment(null);
                refetch();
                if (data.success) {
                    toast(`Appointment is successfully set on ${slotDate} at ${slotTime}`);
                }
                else {
                    toast.error(`Already have an Appointment on ${booking?.slotDate} at ${booking?.slotTime}`)
                }

            })


    }

    return (
        <div className=''>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='mt-5'>
                        <input type="text" disabled name="date" value={format(selected, 'PP')} className="input input-bordered w-full h-10 mb-3" />
                        <select name="slot" className="select select-bordered w-full h-10 mb-3 focus:outline-none">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input required type="text" disabled value={user?.displayName} name="name" placeholder="Full Name" className="input input-bordered w-full h-10 mb-3 focus:outline-none" />
                        <input required type="email" disabled value={user?.email} name="email" placeholder="Email Address" className="input input-bordered w-full h-10 mb-3 focus:outline-none" />
                        <input required type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full h-10 mb-3 focus:outline-none" />
                        <input type="submit" value="Submit" className="btn btn-accent w-full h-10" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;