import React from 'react';

export const ApproveDoctor = () => {
    const doctors = [
        {
            id: 1,
            firstName: 'Alice',
            lastName: 'Johnson',
            email: 'alice.johnson@example.com',
            image: 'https://via.placeholder.com/50',
        },
        {
            id: 2,
            firstName: 'Bob',
            lastName: 'Williams',
            email: 'bob.williams@example.com',
            image: 'https://via.placeholder.com/50',
        },
        {
            id: 3,
            firstName: 'Charlie',
            lastName: 'Brown',
            email: 'charlie.brown@example.com',
            image: 'https://via.placeholder.com/50',
        },
        // Add more doctors as needed
    ];

    return (
        <div className="p-5 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-5">Approve Doctors</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">First Name</th>
                        <th className="py-2 px-4 border-b">Last Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Image</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={doctor.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                            <td className="py-2 px-4 border-b text-center">{doctor.firstName}</td>
                            <td className="py-2 px-4 border-b text-center">{doctor.lastName}</td>
                            <td className="py-2 px-4 border-b text-center">{doctor.email}</td>
                            <td className="py-2 px-4 border-b text-center">
                                <img src={doctor.image} alt={`${doctor.firstName} ${doctor.lastName}`} className="w-10 h-10 rounded-full mx-auto" />
                            </td>
                            <td className="py-2 px-4 border-b text-center space-x-2">
                                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700">Approve</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};