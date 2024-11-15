import React from 'react'
import doctor from '../../assets/doctor.png'
import { About } from './About'
import { Contact } from './Contact'
export const Home = () => {
    return (
        <>
            <div className='h-screen w-full flex justify-between items-center px-20 pt-16 max-md:flex-col-reverse max-md:text-center max-md:justify-center gap-8 max-md:pt-0 max-md:px-4'>
                <div className='max-w-xl'>
                    <h1 className='text-4xl font-black max-lg:text-3xl'>Your health, Your Schedule</h1>
                    <h1 className='text-4xl font-black max-lg:text-3xl'>Easy appointments, Better Care</h1>
                    <p className='mt-4'>Take control of your health today. Book your appointment now and connect with top healthcare professionals.</p>
                    <button className='mt-4 bg-purple-main-69 p-2 text-white rounded'>Book an Appointment</button>
                </div>
                <div>
                    <img src={doctor} />
                </div>
            </div>
            <About />
            <Contact />
        </>
    )
}
