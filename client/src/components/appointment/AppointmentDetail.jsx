import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetDoctor } from '../function/Doctor';  // Assuming GetDoctor is fetching the correct doctor details
import axios from 'axios';

export const AppointmentDetail = () => {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const fetchDoctorDetail = async () => {
            try {
                const doctorsData = await GetDoctor(); // Assuming this gets all doctors
                const selectedDoctor = doctorsData.find((doc) => doc._id === doctorId); // Find the doctor based on the URL param
                setDoctor(selectedDoctor);
            } catch (error) {
                console.error('Failed to fetch doctor details:', error);
            }
        };
        fetchDoctorDetail();
    }, [doctorId]);

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleBookAppointment = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('userInfo'));
            if (!user) {
                console.error('No user data found');
                return;
            }

            // Send the appointment booking request with doctor and user info
            const response = await axios.post('http://localhost:3001/appointment/book', {
                doctorId,
                userId: user._id,
                date,
                time
            });

            console.log('Appointment booked successfully:', response.data);
        } catch (error) {
            console.error('Error booking appointment:', error);
        }
    };

    if (!doctor) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pt-20 px-4 md:px-20 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-slate-50 p-8 shadow-md">
                <h1 className="text-2xl font-bold">Appointment Details</h1>
                <p className="text-lg mt-4">Dr. {doctor.name}</p>
                <p className="text-md mt-2">{doctor.specialty}</p> {/* Corrected from speciality to specialty */}
                <p className="text-md mt-2">{doctor.about}</p>
                <p className="text-md mt-2">Specialist with {doctor.experience} years of experience</p>
                <p className="text-md mt-2 font-bold">Fee: Rs. {doctor.fee}</p>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold">Check Availability</h2>
                    <div className="mt-4">
                        <label className="block text-md">Select Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={handleDateChange}
                            className="mt-2 p-2 border rounded-sm w-full"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-md">Select Time</label>
                        <input
                            type="time"
                            value={time}
                            onChange={handleTimeChange}
                            className="mt-2 p-2 border rounded-sm w-full"
                        />
                    </div>
                    <button
                        onClick={handleBookAppointment}
                        className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-sm"
                    >
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};
