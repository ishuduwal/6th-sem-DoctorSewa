import React, { useState } from 'react';
import { AddDoctor } from '../api/Doctor';

export const AddDoctors = () => {
    const [doctorData, setDoctorData] = useState({
        name: '',
        email: '',
        password: '',
        fee: '',
        speciality: 'General physician',
        about: '',
        experience: '1 Year',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        //console.log(`Updating ${name} to ${value}`);
        setDoctorData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting doctor data:", doctorData);
        try {
            const response = await AddDoctor(doctorData);
            console.log(response.data.message);
            alert('Doctor added successfully');
        } catch (error) {
            console.error("Error adding doctor:", error);
        }
    };
    return (
        <div className="p-5 bg-white shadow max-w-3xl mx-auto max-lg:mt-32 max-lg:w-96">
            <h2 className="text-2xl font-bold mb-5">Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <input type="file" className=" file:py-2 file:px-2  cursor-pointer" onChange={handleFileChange} />
                        </div>
                        <div>
                            <label className="block font-semibold">Your Name</label>
                            <input type="text" name="name" placeholder="Dr. Sanduk" className="w-full p-2 border" value={doctorData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block font-semibold">Doctor Email</label>
                            <input type="email" name="email" placeholder="Email" className="w-full p-2 border" value={doctorData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block font-semibold">Set Password</label>
                            <input type="password" name="password" placeholder="Password" className="w-full p-2 border" value={doctorData.password} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block font-semibold">Experience</label>
                            <select className="w-full p-2 border" name="experience" value={doctorData.experience} onChange={handleChange}>
                                <option>1 Year</option>
                                <option>2 Years</option>
                                <option>3 Years</option>
                                <option>4 Years</option>
                                <option>5+ Years</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block font-semibold">Speciality</label>
                            <select className="w-full p-2 border" name="speciality" value={doctorData.speciality} onChange={handleChange}>
                                <option>General physician</option>
                                <option>Gynecologist</option>
                                <option>Dermatologist</option>
                                <option>Pediatrician</option>
                                <option>Neurologist</option>
                                <option>Gastroenterologist</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-semibold">Fees</label>
                            <input type="number" name="fee" placeholder="Doctor fees" className="w-full p-2 border" value={doctorData.fee} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block font-semibold">About Doctor</label>
                            <textarea placeholder="About Doctor" name="about" className="w-full h-32 p-2 border" value={doctorData.about} onChange={handleChange}></textarea>
                        </div>
                        <div className="text-right">
                            <button className="bg-purple-700 text-white px-4 py-2  hover:bg-purple-900" type="submit">Add Doctor</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
