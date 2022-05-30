import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ selected, setSelected }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);


    const formattetDate = format(selected, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattetDate], () =>
        fetch(`https://stormy-coast-73546.herokuapp.com/available?slotDate=${formattetDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`https://stormy-coast-73546.herokuapp.com/available?slotDate=${formattetDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattetDate]);

    return (
        <div className='text-center px-4 lg:px-10'>
            <h2 className='text-secondary text-lg md:text-xl'>Available Services on {formattetDate}</h2>
            <h2 className='text-accent text-md md:text-lg mt-1 md:mt-2'>Please select a service</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>

            <div className='text-left'>
                {treatment && <BookingModal
                    key={treatment._id}
                    treatment={treatment}
                    selected={selected}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppointment;