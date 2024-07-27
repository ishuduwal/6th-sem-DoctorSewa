import React from 'react';

export const ManageUser = () => {
    const users = [
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
        { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
        { id: 3, firstName: 'Michael', lastName: 'Brown', email: 'michael.brown@example.com' },
    ];

    return (
        <div className="p-5 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-5">Manage Users</h2>
            <div className="hidden lg:block">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">S.N</th>
                            <th className="py-2 px-4 border-b">First Name</th>
                            <th className="py-2 px-4 border-b">Last Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                                <td className="py-2 px-4 border-b text-center">{user.firstName}</td>
                                <td className="py-2 px-4 border-b text-center">{user.lastName}</td>
                                <td className="py-2 px-4 border-b text-center">{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="block lg:hidden">
                {users.map((user, index) => (
                    <div key={user.id} className={`bg-white p-4 mb-4 rounded-lg shadow ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <div className="flex justify-between">
                            <div className="text-lg font-bold">{index + 1}. {user.firstName} {user.lastName}</div>
                        </div>
                        <div className="mt-2">
                            <div className="text-sm"><span className="font-semibold">Email:</span> {user.email}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
