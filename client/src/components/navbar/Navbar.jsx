import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-20 h-16 w-full bg-port-gore-950 text-white fixed'>
                <div className='text-xl font-normal'>
                    <p><i class="fa-solid fa-notes-medical text-2xl pr-2"></i>Swastha सेवा</p>
                </div>
                <ul className='flex gap-12'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>Our Doctors</li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li className='flex'><i class="fa-solid fa-user"></i><p>Sign in</p></li>
                </ul>
            </div>
        </>
    )
}
