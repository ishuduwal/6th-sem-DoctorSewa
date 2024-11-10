import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetDoctor } from '../function/Doctor';
import doctorpic from '../../assets/doctor.jpg'
export const Appointment = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const doctorList = await GetDoctor();
                setDoctors(doctorList);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };
        fetchDoctors();
    }, []);
    return (
        <div className='pt-20 px-4 flex flex-col items-center'>
            {doctors.length > 0 ? (
                doctors.map((doctor) => (
                    <div key={doctor._id} className='flex w-[44rem] items-center bg-slate-50 p-4 shadow-md mb-6 max-lg:w-auto max-md:flex-col'>
                        <div className='max-w-80'>
                            <img src={doctorpic} alt='Doctor' className='w-full h-auto' />
                        </div>
                        <div className='w-full ml-8 max-md:ml-0'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-xl font-semibold'>
                                    Dr. <span className='block md:inline'>{doctor.name}</span>
                                </h2>
                                <h2 className='text-lg font-medium'>Rs. {doctor.fee}</h2>
                            </div>
                            <p className='text-lg font-medium mt-2'>{doctor.speciality}</p>
                            <div className='mt-4'>
                                <p>{doctor.experience} of Experience</p>
                                <button className='mt-4 px-4 py-2 bg-purple-700 rounded-sm text-white'>
                                    <Link to={`/appointment-detail/${doctor._id}`}>Book an Appointment</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No doctors available at the moment.</p>
            )}
        </div>
    )
}
