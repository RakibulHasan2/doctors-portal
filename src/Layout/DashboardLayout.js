import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                         <li><Link to="/dashboard/allUsers">All users</Link></li>
                         <li><Link to="/dashboard/addDoctor">Add Doctor</Link></li>
                         <li><Link to="/dashboard/manageDoctors">Manage Doctor</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;