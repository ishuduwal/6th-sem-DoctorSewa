import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='flex justify-between items-center px-20 h-16 w-full bg-purple-main-69 text-white fixed max-sm:px-8'>
                <div className='text-xl font-normal'>
                    <Link to='/'><i className="fa-solid fa-notes-medical text-2xl pr-2"></i>Swastha सेवा</Link>
                </div>
                <ul className='flex gap-12 max-md:hidden'>
                    <li><Link to='/'>Home</Link></li>
                    <li>Our Doctors</li>
                    <li><Link to='/login' className='flex items-center gap-2'><i className="fa-solid fa-user"></i><p>Sign in</p></Link></li>
                </ul>
                <div className='hidden max-md:flex'>
                    <button onClick={toggleMenu}>
                        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className='bg-purple-main-69 text-white fixed top-16 left-0 w-full p-4'>
                    <ul className='flex flex-col gap-4 text-center items-center'>
                        <li><Link to='/'>Home</Link></li>
                        <li>Our Doctors</li>
                        <li><Link to='/login' className='flex items-center gap-2'><i className="fa-solid fa-user"></i><p>Sign in</p></Link></li>
                    </ul>
                </div>
            )}
        </>
    );
};
