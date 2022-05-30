import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const AppointmentBanner = ({ selected, setSelected }) => {

    return (
        <div className="hero min-h-screen md:px-10 bg-banner bg-center bg-contain bg-no-repeat">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="chair" className="md:max-w-lg rounded-lg shadow-2xl" />
                <div className="md:mr-16 shadow-2xl rounded-lg">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;