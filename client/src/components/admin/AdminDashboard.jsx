import React, { useState } from 'react';
import { DoctorList } from './DoctorList';
import { AddDoctors } from './AddDoctors';
import { UserList } from './UserList';
export const AdminDashboard = () => {
    const [selectedSection, setSelectedSection] = useState('welcome');
    return (
        <div className='flex w-full pt-16 max-lg:flex-col'>
            <div className='w-60 bg-gray-300 text-black shadow-lg p-5 fixed h-screen max-lg:static max-lg:w-full max-lg:h-20 max-lg:flex max-lg:justify-between max-lg:px-8'>
                <h2 className='text-2xl font-bold mb-10'>Admin Dashboard</h2>
                <ul className='space-y-4 max-lg:flex max-lg:space-y-0 max-lg:gap-4'>
                    <li className={`cursor-pointer max-lg:h-2rem max-lg:w-28 p-2 ${selectedSection === 'add-doctors' ? 'bg-purple-700 text-white' : 'bg-white hover:bg-purple-500 hover:text-white'}`} onClick={() => setSelectedSection('add-doctors')}>Add Doctors</li>
                    <li className={`cursor-pointer max-lg:h-2rem max-lg:w-20 p-2 ${selectedSection === 'doctor-list' ? 'bg-purple-700 text-white' : 'bg-white hover:bg-purple-500 hover:text-white'}`} onClick={() => setSelectedSection('doctor-list')}>Doctors</li>
                    <li className={`cursor-pointer max-lg:h-2rem max-lg:w-20 p-2 ${selectedSection === 'user-list' ? 'bg-purple-700 text-white' : 'bg-white hover:bg-purple-500 hover:text-white'}`} onClick={() => setSelectedSection('user-list')}>Users</li>
                </ul>
            </div>
            <div className='w-full h-screen bg-gray-100 p-10 pl-72 max-lg:pl-0 max-lg:flex max-lg:items-center max-lg:justify-center max-lg:p-0'>
                {selectedSection === 'welcome' && (
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Welcome to the Admin Dashboard</h2>
                        <p className="text-lg">Select an option from the sidebar to get started.</p>
                    </div>
                )}
                {selectedSection === 'add-doctors' && <AddDoctors />}
                {selectedSection === 'doctor-list' && <DoctorList />}
                {selectedSection === 'user-list' && <UserList />}
            </div>
        </div>
    );
};
