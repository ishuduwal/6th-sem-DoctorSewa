import React, { useEffect, useState } from "react";
import { GetAllAppointments } from "../../components/function/Appointment";

export const Appointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const data = await GetAllAppointments();
                setAppointments(data);
            } catch (err) {
                setError("Error fetching appointments");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="p-5 bg-white rounded-lg shadow max-lg:flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold mb-5">All Appointments</h2>
            {loading && <div className="text-center">Loading appointments...</div>}
            {error && <div className="text-red-500 text-center">{error}</div>}

            {appointments.length > 0 ? (
                <div className="w-full">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Doctor</th>
                                <th className="py-2 px-4 border-b">Patient</th>
                                <th className="py-2 px-4 border-b">Date & Time</th>
                                <th className="py-2 px-4 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment._id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b text-center">
                                        {appointment.doctor?.name || "N/A"}
                                    </td>
                                    <td className="py-2 px-4 border-b text-center">
                                        {appointment.user?.firstname} {appointment.user?.lastname}
                                    </td>
                                    <td className="py-2 px-4 border-b text-center">
                                        {appointment.date} {appointment.time}
                                    </td>
                                    <td className="py-2 px-4 border-b text-center">
                                        {appointment.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center">No appointments found.</div>
            )}
        </div>
    );
};
