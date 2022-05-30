import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyAppointments = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch(`https://stormy-coast-73546.herokuapp.com/booking?patientEmail=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => setAppointments(data))
    }, [user?.email, navigate]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>My Appointments : {appointments?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full mt-5">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr key={index}>
                                <th className='text-sm'>{index + 1}</th>
                                <td className='text-sm'>{a?.treatmentName}</td>
                                <td className='text-sm'>{a?.slotDate}</td>
                                <td className='text-sm'>{a?.slotTime}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;