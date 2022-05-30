import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const InfoContainer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-8'>
            <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary" img={clock} title="Opening Hours" descrip="Everyday 9am-8pm without Friday"></InfoCard>
            <InfoCard bgColor="bg-accent" img={marker} title="Visit Our Location" descrip="Atmile, Tebunia, Pabna Sadar, Pabna"></InfoCard>
            <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary" img={phone} title="Contact Us Now" descrip="+8801727-180339"></InfoCard>
        </div>
    );
};

export default InfoContainer;