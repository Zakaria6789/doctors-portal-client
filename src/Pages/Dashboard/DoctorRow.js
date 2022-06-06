import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, setDeleteDoctor }) => {
    const { name, email, specialty, img } = doctor;


    // create capitalize name
    const splitName = name.split(' ');
    const capitalizeName = splitName.map(each => each.charAt(0).toUpperCase() + each.slice(1)).join(' ');


    return (

        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-10 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{capitalizeName}</td>
            <td>{email}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeleteDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>

    );
};

export default DoctorRow;