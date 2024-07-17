import React from 'react'

export const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-8 h-16 w-full bg-port-gore-950 text-white'>
                <div className='text-xl font-normal'>
                    <p><i class="fa-solid fa-notes-medical text-2xl pr-2"></i>Swastha सेवा</p>
                </div>
                <ul className='flex gap-12'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Our Doctors</li>
                    <li>Contact Us</li>
                    <li className='flex'><i class="fa-solid fa-user"></i><p>Sign in</p></li>
                </ul>
            </div>
        </>
    )
}
