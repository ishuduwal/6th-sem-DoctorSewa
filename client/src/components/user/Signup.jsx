import React from 'react';
import signupImg from '../../assets/signup.jpg';
import { Link } from 'react-router-dom';

export const Signup = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 pt-16">
            <div className="bg-white p-4  w-96 h-[33rem] shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Sign up 🔑</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Your name</label>
                        <div className="flex space-x-2">
                            <input type="text" placeholder="First name" className="border border-gray-300  px-3 py-2 w-1/2" />
                            <input type="text" placeholder="Last name" className="border border-gray-300  px-3 py-2 w-1/2" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input type="email" placeholder="oriondoc@email.com" className="border border-gray-300  px-3 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input type="password" placeholder="Min, 6 characters" className="border border-gray-300  px-3 py-2 w-full" />
                    </div>
                    <button className="bg-purple-main-69 text-white py-2 px-4  w-full">Sign up</button>
                    <p className='text-center m-2'>Or</p>
                    <button className="bg-purple-main-69 text-white py-2 px-4  mb-4 w-full">Sign up with Google</button>
                </form>
                <p className="text-center mt-4">Already have an account? <Link to='/login' className="text-purple-950 underline">Login now</Link></p>
            </div>
            <div className="hidden shadow-lg md:block">
                <img src={signupImg} className='w-96 h-[33rem] object-cover' alt="Signup" />
            </div>
        </div>
    );
};
