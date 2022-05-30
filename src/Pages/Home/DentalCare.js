import React from 'react';
import dentalCare from '../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div className="hero md:px-32 mb-32">
            <div className="hero-content flex-col lg:flex-row">
                <img src={dentalCare} alt="dentalCare" className="md:max-w-md rounded-lg shadow-2xl md:mr-12" />
                <div className="">
                    <h1 className="text-3xl md:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default DentalCare;