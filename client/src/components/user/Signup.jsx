import React, { useState } from 'react';
import signupImg from '../../assets/signup.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { SignupUser } from '../function/User';

export const Signup = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        address: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const SignupHandler = async (e) => {
        e.preventDefault();
        try {
            console.log('Signing up with:', user);
            const res = await SignupUser(user);
            console.log('Response from Signup:', res);

            if (res && res.user) {
                const { user } = res;  // Access the user object inside the response

                // Store user info in localStorage after successful signup
                localStorage.setItem('firstname', user.firstname);
                localStorage.setItem('lastname', user.lastname);
                localStorage.setItem('email', user.email);
                localStorage.setItem('address', user.address);
                localStorage.setItem('userType', 'user'); // Store user type
                localStorage.setItem('userInfo', JSON.stringify(res));

                // Log to confirm it was stored
                console.log('Stored data in localStorage:', {
                    firstname: localStorage.getItem('firstname'),
                    lastname: localStorage.getItem('lastname'),
                    email: localStorage.getItem('email'),
                    address: localStorage.getItem('address'),
                });

                navigate('/user-dashboard');
                window.location.reload();
            } else {
                setError('Signup failed, please try again.');
            }
        } catch (error) {
            setError('Signup failed, please try again.');
            console.log('Signup failed:', error);
        }
    };


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 pt-16">
            <div className="bg-white p-4  w-96 h-[33rem] shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Sign up 🔑</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Your name</label>
                        <div className="flex space-x-2">
                            <input type="text" name='firstname' placeholder="First name" value={user.firstname} onChange={handleChange} className="border border-gray-300  px-3 py-2 w-1/2" />
                            <input type="text" name='lastname' placeholder="Last name" value={user.lastname} onChange={handleChange} className="border border-gray-300  px-3 py-2 w-1/2" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input type="email" name='email' placeholder="tylerdurden@gmail.com" value={user.email} onChange={handleChange} className="border border-gray-300  px-3 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input type="password" name='password' placeholder="Min, 6 characters" value={user.password} onChange={handleChange} className="border border-gray-300  px-3 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Address</label>
                        <input type="text" name='address' placeholder="tylerdurden@gmail.com" value={user.address} onChange={handleChange} className="border border-gray-300  px-3 py-2 w-full" />
                    </div>
                    {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
                    <button className="bg-purple-main-69 text-white py-2 px-4  w-full" onClick={SignupHandler}>Sign up</button>
                    <p className='text-center m-2'>Or</p>
                </form>
                <p className="text-center mt-4">Already have an account? <Link to='/login' className="text-purple-950 underline">Login now</Link></p>
            </div>
            <div className="hidden shadow-lg md:block">
                <img src={signupImg} className='w-96 h-[33rem] object-cover' alt="Signup" />
            </div>
        </div>
    );
};
