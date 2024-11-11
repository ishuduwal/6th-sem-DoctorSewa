import React, { useEffect, useState } from 'react';
import { GetAppointment } from '../../function/Appointment';

export const PatientAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userEmail = localStorage.getItem('userEmail');

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const data = await GetAppointment(userEmail);
                console.log('Fetched data:', data);
                setAppointments([data]);
            } catch (err) {
                setError('Error fetching appointments');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, [userEmail]);

    console.log('Appointments state:', appointments);

    return (
        <div className="p-5 bg-white rounded-lg shadow max-lg:flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold mb-5">Appointments</h2>

            {loading && <div className="text-center">Loading...</div>}

            {error && <div className="text-red-500 text-center">{error}</div>}

            {appointments.length === 0 && <div className="text-center">No appointments found.</div>}

            <div className="w-full">
                <div className="hidden lg:block">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Doctor</th>
                                <th className="py-2 px-4 border-b">Fee</th>
                                <th className="py-2 px-4 border-b">Date</th>
                                <th className="py-2 px-4 border-b">Time</th>
                                <th className="py-2 px-4 border-b">Status</th>
                                <th className="py-2 px-4 border-b">Patient</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment._id} className="hover:bg-gray-100 text-center">
                                    <td className="py-2 px-4 border-b">{appointment.doctor?.name || 'N/A'}</td>
                                    <td className="py-2 px-4 border-b">{appointment.doctor?.fee || 'N/A'}</td>
                                    <td className="py-2 px-4 border-b">{appointment.date}</td>
                                    <td className="py-2 px-4 border-b">{appointment.time}</td>
                                    <td className="py-2 px-4 border-b">{appointment.status}</td>
                                    <td className="py-2 px-4 border-b">{appointment.user?.firstname}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="lg:hidden">
                    {appointments.map((appointment) => (
                        <div key={appointment._id} className="mb-6 p-4 bg-gray-100 rounded-lg shadow-lg">
                            <div className="text-lg font-semibold mb-2">
                                <span className="font-bold">Doctor:</span> {appointment.doctor?.name || 'N/A'}
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                                <span className="font-bold">Fee:</span> {appointment.doctor?.fee || 'N/A'}
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                                <span className="font-bold">Date & Time:</span> {appointment.date} {appointment.time}
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                                <span className="font-bold">Status:</span> {appointment.status}
                            </div>
                            <div className="mt-3">
                                <div className="text-lg font-semibold">
                                    <span className="font-bold">Patient:</span> {appointment.user?.firstname} {appointment.user?.lastname}
                                </div>
                                <div className="text-sm text-gray-600">
                                    <span className="font-bold">Email:</span> {appointment.user?.email || 'N/A'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
