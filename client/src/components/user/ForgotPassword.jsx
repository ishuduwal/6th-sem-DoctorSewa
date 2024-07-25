import React from 'react';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full bg-gray-100">
            <div className='max-w-80'>
                <h2 className="text-2xl font-bold mb-2">Forgot password 😕</h2>
                <p className="mb-2">Enter your account email, and we'll send you a link to reset your password.</p>
                <form>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input type="email" placeholder="tylerdurden@gmail.com" className="border border-black  px-3 py-2 w-full" />
                    </div>
                    <button className="bg-purple-main-69 text-white py-2 px-4 w-full">Submit</button>
                </form>
                <p className="text-center text-purple-main-69 mt-4">
                    <Link to='/login' className="hover:underline">Back to login</Link>
                </p>
            </div>
        </div>
    );
};
