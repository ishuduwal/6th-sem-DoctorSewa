import React, { useState } from 'react';
import { ApprovePatients } from './ApprovePatients';
import { ApprovedAppiontment } from './ApprovedAppiontment';
export const DoctorDashboard = () => {
    const [selectedSection, setSelectedSection] = useState('welcome');
    return (
        <div className='flex h-screen w-full pt-16 max-lg:flex-col'>
            <div className='w-60 bg-gray-300 text-black shadow-lg p-5 fixed h-screen max-lg:static max-lg:w-full max-lg:h-20 max-lg:flex max-lg:justify-between max-lg:px-8'>
                <h2 className='text-2xl font-bold mb-10'>Doctor Dashboard</h2>
                <ul className='space-y-4 max-lg:flex max-lg:space-y-0 max-lg:gap-4'>
                    <li className={`cursor-pointer max-lg:h-2rem max-lg:w-20 p-2 ${selectedSection === 'approvepatients' ? 'bg-purple-700 text-white' : 'bg-white hover:bg-purple-500 hover:text-white'}`} onClick={() => setSelectedSection('approvepatients')}>Approve Patients</li>
                    <li className={`cursor-pointer max-lg:h-2rem max-lg:w-20 p-2 ${selectedSection === 'appointment' ? 'bg-purple-700 text-white' : 'bg-white hover:bg-purple-500 hover:text-white'}`} onClick={() => setSelectedSection('appointment')}>Appointment</li>
                </ul>
            </div>
            <div className='w-full h-screen bg-gray-100 p-10 pl-72 max-lg:pl-0 max-lg:flex max-lg:items-center max-lg:justify-center max-lg:p-0'>
                {selectedSection === 'welcome' && (
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Welcome to the Doctor Dashboard</h2>
                        <p className="text-lg">Select an option from the sidebar to get started.</p>
                    </div>
                )}
                {selectedSection === 'approvepatients' && < ApprovePatients />}
                {selectedSection === 'appointment' && < ApprovedAppiontment />}
            </div>
        </div>
    );
};
