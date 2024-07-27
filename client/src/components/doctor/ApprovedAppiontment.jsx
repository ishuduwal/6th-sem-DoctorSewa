import React from 'react'

export const ApprovedAppiontment = () => {
    const patients = [
        {
            id: 1,
            firstName: 'Alice',
            lastName: 'Johnson',
            email: 'alice.johnson@example.com',
            date: '22-11-2024 15:30',
        },
        {
            id: 2,
            firstName: 'Bob',
            lastName: 'Williams',
            email: 'bob.williams@example.com',
            date: '22-11-2024 15:30',
        },
        {
            id: 3,
            firstName: 'Charlie',
            lastName: 'Brown',
            email: 'charlie.brown@example.com',
            date: '22-11-2024 15:30',
        },
    ]
    return (
        <div className="p-5 bg-white rounded-lg shadow max-lg:flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold mb-5">Approve Patients</h2>
            <div className="hidden lg:block">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">First Name</th>
                            <th className="py-2 px-4 border-b">Last Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={patient.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                <td className="py-2 px-4 border-b text-center">{patient.firstName}</td>
                                <td className="py-2 px-4 border-b text-center">{patient.lastName}</td>
                                <td className="py-2 px-4 border-b text-center">{patient.email}</td>
                                <td className="py-2 px-4 border-b text-center">{patient.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="block lg:hidden max-lg:flex justify-center flex-col items-center">
                {patients.map((patient, index) => (
                    <div key={patient.id} className={`bg-white p-4 mb-4 rounded-lg shadow ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <div className="flex justify-between items-center">
                            <div className="text-right">
                                <div className="text-lg font-bold">{patient.firstName} {patient.lastName}</div>
                                <div className="text-sm">{patient.email}</div>
                            </div>
                        </div>
                        <div className="mt-2 text-center space-x-2">
                            <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700">Approve</button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
