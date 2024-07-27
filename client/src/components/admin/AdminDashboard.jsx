import React, { useState } from 'react';
import { ManageUser } from './ManageUser';
import { ApproveDoctor } from './ApproveDoctor';
export const AdminDashboard = () => {
    const [selectedSection, setSelectedSection] = useState('welcome');
    return (
        <div className='flex h-screen w-full pt-16'>
            <div className='w-60 bg-gray-300 text-black shadow-lg p-5 fixed h-screen'>
                <h2 className='text-2xl font-bold mb-10'>Admin Dashboard</h2>
                <ul className='space-y-4'>
                    <li className={`cursor-pointer p-2 ${selectedSection === 'users' ? 'bg-purple-700 text-white' : 'bg-white hover:bg-purple-500 hover:text-white'}`} onClick={() => setSelectedSection('users')}>Users</li>
                    <li className={`cursor-pointer p-2 ${selectedSection === 'doctors' ? 'bg-purple-700 text-white' : 'bg-white hover:bg-purple-500 hover:text-white'}`} onClick={() => setSelectedSection('doctors')}>Doctors</li>
                </ul>
            </div>
            <div className='w-full bg-gray-100 p-10 pl-72'>
                {selectedSection === 'welcome' && (
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Welcome to the Admin Dashboard</h2>
                        <p className="text-lg">Select an option from the sidebar to get started.</p>
                    </div>
                )}
                {selectedSection === 'users' && <ManageUser />}
                {selectedSection === 'doctors' && <ApproveDoctor />}
            </div>
        </div>
    );
};
