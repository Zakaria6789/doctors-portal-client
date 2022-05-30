import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-footer bg-cover bg-center">
            <div className='px-4 md:px-10 py-10 footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/some' className="link link-hover">Branding</a>
                    <a href='/some' className="link link-hover">Design</a>
                    <a href='/some' className="link link-hover">Marketing</a>
                    <a href='/some' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/some' className="link link-hover">About us</a>
                    <a href='/some' className="link link-hover">Contact</a>
                    <a href='/some' className="link link-hover">Jobs</a>
                    <a href='/some' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/some' className="link link-hover">Terms of use</a>
                    <a href='/some' className="link link-hover">Privacy policy</a>
                    <a href='/some' className="link link-hover">Cookie policy</a>
                </div>
            </div>

            <footer className="footer footer-center p-5 mt-5">
                <div>
                    <p className='font-semibold'>Copyright &copy; 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>

        </footer>
    );
};

export default Footer;