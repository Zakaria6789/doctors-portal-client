import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile px-4 md:px-10 " >
            <input id="open-dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col md:mt-5" >
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>

            </div >
            <div className="drawer-side md:mr-8" >
                <label htmlFor="open-dashboard" className="drawer-overlay" ></label >
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content" >
                    {/* <!-- Sidebar content here --> */}
                    < li > <Link to='/dashboard'>My Appointments</Link></li >
                    <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add Doctor </Link></li>
                        <li><Link to='/dashboard/manageDoctors'>Manage Doctors </Link></li>
                    </>}
                </ul >

            </div >
        </div >
    );
};

export default Dashboard;