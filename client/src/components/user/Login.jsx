import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/login.png';

export const Login = () => {
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center bg-gray-200 pt-16'>
                <div className='bg-purple-main-69 h-[30rem] w-96 flex justify-center items-center'>
                    <img src={login} alt="Login Illustration" />
                </div>
                <div className='bg-white h-[30rem] w-86 px-4 py-8'>
                    <h1 className='text-2xl font-bold'>Sign in</h1>
                    <p className='mt-2'>Welcome back! Please enter your details.</p>

                    <div className='mt-6'>
                        <input type='email' placeholder='Email' className='w-full mt-4 p-2 border border-black ' />
                    </div>
                    <div className='mt-4'>
                        <input type='password' placeholder='Password' className='w-full mt-4 p-2 border border-black  ' />
                    </div>
                    <div className='mt-6 text-right'>
                        <Link to='/forgot-password' className='underline'>Forgot Password?</Link>
                    </div>
                    <div className='mt-2'>
                        <button className='w-full p-2 bg-purple-main-69 text-white  hover:bg-purple-900'>Sign in</button>
                    </div>
                    <div className='mt-4'>
                        <button className='w-full p-2 bg-red-500 text-white  hover:bg-red-600'>Sign in with Google</button>
                    </div>
                    <div className='mt-4 text-center'>
                        <p>Need an account? <Link to='/signup' className='underline'>Create an account</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}
