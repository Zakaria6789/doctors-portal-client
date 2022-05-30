import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen md:px-10 bg-banner bg-center bg-contain bg-no-repeat">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="chair" className="md:max-w-lg rounded-lg shadow-2xl" />
                <div className="md:mr-5">
                    <h1 className="text-3xl md:text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;