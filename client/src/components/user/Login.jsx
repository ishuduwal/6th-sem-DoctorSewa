import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/login.png';
import { LoginUser } from '../function/User';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handlePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
        };

        try {
            const res = await LoginUser(user);
            console.log('Login response:', res);

            // Directly check if `res` exists, as `res` is the user object
            if (res) {
                localStorage.setItem('userInfo', JSON.stringify(res));
                console.log('Stored in localStorage:', localStorage.getItem('userInfo'));

                navigate('/user-dashboard');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.log('Login failed:', error);
            setError('Invalid email or password');
        }
    };


    return (
        <div className='h-screen w-full flex justify-center items-center bg-gray-200 pt-16'>
            <div className='bg-purple-main-69 h-[30rem] w-96 flex justify-center items-center max-md:hidden'>
                <img src={login} alt="Login Illustration" />
            </div>
            <div className='bg-white h-[30rem] w-96 px-4 py-8 max-md:m-8'>
                <h1 className='text-2xl font-bold'>Sign in</h1>
                <p className='mt-2'>Welcome back! Please enter your details.</p>

                <div className='mt-6'>
                    <label className="block">Email</label>
                    <input type='email' placeholder="tylerdurden@gmail.com" className='w-full p-2 mb-2 border border-black' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mt-4'>
                    <label className="block">Password</label>
                    <div className='flex items-center'>
                        <input type={showPassword ? "text" : "password"} placeholder="Min, 6 characters" className='w-full p-2 border-t border-l border-b border-black' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className='cursor-pointer p-3 border-black border-r border-t border-b flex justify-center items-center' onClick={handlePassword}>
                            {showPassword ? (<i className="fa-solid fa-eye"></i>) : (<i className="fa-solid fa-eye-slash"></i>)}
                        </div>
                    </div>
                </div>
                <div className='mt-6 text-right'>
                    <Link to='/forgotpassword' className='underline'>Forgot Password?</Link>
                </div>
                <div className='mt-2'>
                    <button className='w-full p-2 bg-purple-main-69 text-white hover:bg-purple-900' onClick={handleLogin}>Sign in</button>
                </div>
                <p className='text-center m-2'>Or</p>
                <div>
                    <button className='w-full p-2 bg-red-500 text-white hover:bg-red-600'><Link to='/doctor-login'>Doctor Login</Link></button>
                </div>
                <div className='mt-4 text-center'>
                    <p>Need an account? <Link to='/signup' className='underline'>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};
