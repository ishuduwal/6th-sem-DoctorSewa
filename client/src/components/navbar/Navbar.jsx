import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='flex justify-between items-center px-20 h-16 w-full bg-port-gore-950 text-white fixed'>
                <div className='text-xl font-normal'>
                    <p><i className="fa-solid fa-notes-medical text-2xl pr-2"></i>Swastha सेवा</p>
                </div>
                <ul className='flex gap-12 max-md:hidden'>
                    <li><Link to='/'>Home</Link></li>
                    <li>Our Doctors</li>
                    <li className='flex items-center gap-2'><i className="fa-solid fa-user"></i><p>Sign in</p></li>
                </ul>
                <div className='hidden max-md:flex'>
                    <button onClick={toggleMenu}>
                        <i className="fa-solid fa-bars-staggered text-2xl"></i>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className='bg-port-gore-950 text-white fixed top-16 left-0 w-full p-4'>
                    <ul className='flex flex-col gap-4 text-center items-center'>
                        <li><Link to='/'>Home</Link></li>
                        <li>Our Doctors</li>
                        <li className='flex items-center gap-2'><i className="fa-solid fa-user"></i><p>Sign in</p></li>
                    </ul>
                </div>
            )}
        </>
    );
};
