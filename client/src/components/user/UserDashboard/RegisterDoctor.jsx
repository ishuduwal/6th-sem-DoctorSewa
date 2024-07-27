import React from 'react'

export const RegisterDoctor = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Doctor Registration</h2>
                <form>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                            Doctor's Name
                        </label>
                        <input
                            className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter doctor's name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="mobile">
                            Mobile Number
                        </label>
                        <input
                            className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="mobile"
                            type="text"
                            placeholder="Enter mobile number"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="photo">
                            Photo
                        </label>
                        <input
                            className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="photo"
                            type="file"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="specialization">
                            Specialization
                        </label>
                        <input
                            className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="specialization"
                            type="text"
                            placeholder="Enter specialization"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fee">
                            Fee per Appointment
                        </label>
                        <input
                            className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="fee"
                            type="number"
                            placeholder="Enter fee"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="timings">
                            Available Timings
                        </label>
                        <input
                            className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="timings"
                            type="datetime-local"
                            placeholder="Enter available timings"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="px-4 py-2 font-bold text-white bg-purple-main-69 rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
