import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-appointment px-4 md:px-10 text-center py-10 bg-cover bg-no-repeat'>
            <div>
                <h3 className='text-secondary font-semibold text-md  md:text-lg mb-1 md:mb-2'>Contact Us</h3>
                <h2 className='font-semibold text-2xl md:text-3xl text-white'>Stay Connected With Us</h2>
            </div>
            <div className='mt-7'>
                <input type="text" placeholder="Email Address" className="input w-full max-w-md text-[16px] h-10 mb-3 " />
                <br />
                <input type="text" placeholder="Subject" className="input w-full max-w-md text-[16px] h-10 mb-3" />
                <br />
                <textarea className="textarea w-full max-w-md h-32 text-[16px]" placeholder="Your Message"></textarea>
                <br />
                <input className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary px-6 mt-7" type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default ContactUs;