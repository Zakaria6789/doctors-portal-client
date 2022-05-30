import React from 'react';
import doctor from '../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <div className="hero md:px-32 bg-appointment py-8 md:py-0">
            <div className="hero-content flex-col lg:flex-row md:p-0">
                <img src={doctor} alt="dentalCare" className="md:max-w-lg rounded-lg md:mt-[-100px] hidden md:block" />
                <div className="text-white">
                    <h3 className='text-secondary font-semibold text-md  md:text-lg mb-1 md:mb-2'>Appointment</h3>
                    <h1 className="text-2xl md:text-3xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default MakeAppointment;