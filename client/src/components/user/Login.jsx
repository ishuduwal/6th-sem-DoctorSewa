import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/login.png';

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handlePassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center bg-gray-200 pt-16'>
                <div className='bg-purple-main-69 h-[30rem] w-96 flex justify-center items-center max-md:hidden'>
                    <img src={login} alt="Login Illustration" />
                </div>
                <div className='bg-white h-[30rem] w-96 px-4 py-8 max-md:m-8'>
                    <h1 className='text-2xl font-bold'>Sign in</h1>
                    <p className='mt-2'>Welcome back! Please enter your details.</p>

                    <div className='mt-6'>
                        <label className="block">Email</label>
                        <input type='email' placeholder="tylerdurden@gmail.com" className='w-full p-2 mb-2 border border-black ' />
                    </div>
                    <div className='mt-4'>
                        <label className="block">Password</label>
                        <div className='flex'>
                            <input type={showPassword ? "text" : "password"} placeholder="Min, 6 characters" className='w-full  p-2 border-t border-l border-b border-black  ' />
                            <div className='cursor-pointer mt-6 border-black border-r border-t border-b' onClick={handlePassword}>{showPassword ? (<i class="fa-solid fa-eye"></i>) : (<i class="fa-solid fa-eye-slash"></i>)}</div>
                        </div>
                    </div>
                    <div className='mt-6 text-right'>
                        <Link to='/forgotpassword' className='underline'>Forgot Password?</Link>
                    </div>
                    <div className='mt-2'>
                        <button className='w-full p-2 bg-purple-main-69 text-white  hover:bg-purple-900'>Sign in</button>
                    </div>
                    <p className='text-center m-2'>Or</p>
                    <div>
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
