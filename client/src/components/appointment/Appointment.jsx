import React from 'react'
import doctor from '../../assets/doctor.jpg'
import { Link } from 'react-router-dom'

export const Appointment = () => {
    return (
        <div className='pt-20 px-4 flex flex-col items-center'>
            <div className='flex w-[55rem] items-center  bg-slate-50 p-4 shadow-md max-lg:w-auto max-md:flex-col'>
                <div className='max-w-80'>
                    <img src={doctor} alt="Doctor" className='w-full h-auto' />
                </div>
                <div className='w-full ml-8 max-md:ml-0'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-xl font-semibold'>Dr. <span className='block md:inline'>Murli Prasad Sharma</span></h2>
                        <h2 className='text-lg font-medium'>Rs. 350</h2>
                    </div>
                    <p className='text-lg font-medium mt-2'>Cardiologist</p>
                    <div className='mt-4'>
                        <p>Specialist with 10 years of experience</p>
                        <button className='mt-4 px-4 py-2 bg-purple-700 rounded-sm text-white'><Link to='/appointment-detail'>Book an Appointment</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
