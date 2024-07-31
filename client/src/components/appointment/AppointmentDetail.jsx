import React, { useState } from 'react'
import doctor from '../../assets/doctor.jpg'

export const AppointmentDetail = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }

    const handleCheckAvailability = () => {
        alert(`Checking availability for ${date} at ${time}`)
    }

    return (
        <div className='pt-20 px-4 md:px-20 flex flex-col items-center'>
            <div className='w-full max-w-4xl bg-slate-50 p-8 shadow-md'>
                <div className='w-full md:w-2/3 md:ml-8 mt-4 md:mt-0'>
                    <h1 className='text-2xl font-bold'>Appointment Details</h1>
                    <p className='text-lg mt-4'>Dr. Murli Prasad Sharma</p>
                    <p className='text-md mt-2'>Cardiologist</p>
                    <p className='text-md mt-2'>Fee: Rs. 350</p>
                    <p className='text-md mt-2'>Specialist with 10 years of experience</p>
                    <p className='text-md mt-4'>Please arrive 10 minutes before your scheduled appointment time.</p>

                    <div className='mt-8'>
                        <h2 className='text-xl font-semibold'>Check Availability</h2>
                        <div className='mt-4'>
                            <label className='block text-md'>Select Date</label>
                            <input type='date' value={date} onChange={handleDateChange} className='mt-2 p-2 border rounded-sm w-full' />
                        </div>
                        <div className='mt-4'>
                            <label className='block text-md'>Select Time</label>
                            <input type='time' value={time} onChange={handleTimeChange} className='mt-2 p-2 border rounded-sm w-full' />
                        </div>
                        <button onClick={handleCheckAvailability} className='mt-4 px-4 py-2 bg-purple-700 text-white rounded-sm'>Check Availability</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
