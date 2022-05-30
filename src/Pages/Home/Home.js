import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import DentalCare from './DentalCare';
import InfoContainer from './InfoContainer';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoContainer></InfoContainer>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;