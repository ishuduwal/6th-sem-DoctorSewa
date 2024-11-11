import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDoctor } from '../function/Doctor';

export const DoctorLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [doctor, setDoctor] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handlePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor({
            ...doctor,
            [name]: value
        });
    };

    const LoginHandler = async (e) => {
        e.preventDefault();
        try {
            console.log('Logging in with:', doctor);
            const res = await LoginDoctor(doctor);
            console.log('Response from DoctorLogin:', res);

            if (res && res._id) {
                localStorage.setItem('doctorEmail', res.email);
                localStorage.setItem('doctorName', res.name);
                localStorage.setItem('doctorId', res._id);
                localStorage.setItem('userType', 'doctor'); // Store user type
                localStorage.setItem('doctorInfo', JSON.stringify(res));

                setDoctor({
                    email: '',
                    password: ''
                });

                setError('');

                navigate('/doctor-dashboard');
                window.location.reload();
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('Invalid email or password');
            console.log('Login failed:', error);
        }
    };
    return (
        <>
            <div className='bg-gray-100 h-screen w-full flex justify-center items-center'>
                <div className='bg-white w-full sm:w-96 p-8'>
                    <h1 className='text-3xl font-semibold text-center text-purple-700 mb-6'>Doctor Login</h1>
                    <div className='mb-6'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input id="email" type='email' name='email' placeholder="youremail@domain.com" className='w-full p-3 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500' value={doctor.email} onChange={handleChange} />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className='relative'>
                            <input id="password" name='password' type={showPassword ? "text" : "password"} placeholder="Min, 6 characters" className='w-full p-3 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500' value={doctor.password} onChange={handleChange} />
                            <div className='absolute right-3 bottom-3 cursor-pointer text-gray-500' onClick={handlePassword}>
                                {showPassword ? (<i className="fa-solid fa-eye"></i>) : (<i className="fa-solid fa-eye-slash"></i>)}
                            </div>
                        </div>
                    </div>
                    {error && <div className='error'>{error}</div>}
                    <div>
                        <button onClick={LoginHandler} className='w-full p-3 bg-purple-700 text-white hover:bg-purple-800 transition duration-200'>Sign in</button>
                    </div>
                </div>
            </div>
        </>
    );
};
