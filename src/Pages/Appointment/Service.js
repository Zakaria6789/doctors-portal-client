import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title mx-auto text-secondary">{name}</h2>
                <p>{slots?.length
                    ? slots[0]
                    : <span className='text-red-400'>Try another Day</span>}</p>
                <p><small>{slots?.length} {slots?.length > 1 ? 'Spaces' : 'Space'} Available</small></p>
                <p className='text-xl'>Price : ${price}</p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots?.length === 0}
                        htmlFor="booking-modal"
                        className="btn modal-button btn-primary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;