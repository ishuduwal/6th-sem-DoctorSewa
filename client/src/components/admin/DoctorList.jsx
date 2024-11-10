import React, { useState, useEffect } from 'react';
import { DeleteDoctor, GetDoctor } from '../function/Doctor';

export const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchDoctors = async () => {
        try {
            const fetchedDoctors = await GetDoctor();
            setDoctors(fetchedDoctors);
            setLoading(false);
        } catch (error) {
            setError("Failed to fetch doctors");
            setLoading(false);
            console.error(error);
        }
    };
    useEffect(() => {
        fetchDoctors();
    }, []);

    const handleDeleteDoctor = async (doctorId) => {
        try {
            if (!doctorId) {
                console.error('Doctor ID is missing');
                return;
            }
            const response = await DeleteDoctor(doctorId);
            console.log('Doctor deleted successfully:', response);
            fetchDoctors();
        } catch (error) {
            console.error('Error deleting doctor:', error);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-5 bg-white rounded-lg shadow max-lg:flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold mb-5">Doctors List</h2>
            <div className="hidden lg:block">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Specialty</th>
                            <th className="py-2 px-4 border-b">Experience</th>
                            <th className="py-2 px-4 border-b">Fee</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(doctors) && doctors.map((doctor, index) => (
                            <tr key={doctor.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                <td className="py-2 px-4 border-b text-center">{doctor.name}</td>
                                <td className="py-2 px-4 border-b text-center">{doctor.email}</td>
                                <td className="py-2 px-4 border-b text-center">{doctor.speciality}</td>
                                <td className="py-2 px-4 border-b text-center">{doctor.experience}</td>
                                <td className="py-2 px-4 border-b text-center">Rs.{doctor.fee}</td>
                                <td className="py-2 px-4 border-b text-center"><button onClick={() => handleDeleteDoctor(doctor._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="block lg:hidden max-lg:flex justify-center flex-col items-center">
                {doctors.map((doctor, index) => (
                    <div key={doctor.id} className={`bg-white p-4 mb-4 rounded-lg shadow ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <div className="flex justify-between items-center">
                            <div className="text-right">
                                <div className="text-lg font-bold">{doctor.firstName} {doctor.lastName}</div>
                                <div className="text-sm">{doctor.email}</div>
                            </div>
                        </div>
                        <div className="mt-2 text-center space-x-2">
                            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
