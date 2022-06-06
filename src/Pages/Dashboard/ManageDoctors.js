import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Manage Doctors : {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full mt-5">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            doctors?.map((doctor, index) => <DoctorRow
                                key={index}
                                doctor={doctor}
                                index={index}
                                setDeleteDoctor={setDeleteDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && <DeleteConfirmModal
                    deleteDoctor={deleteDoctor}
                    refetch={refetch}
                    setDeleteDoctor={setDeleteDoctor}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;