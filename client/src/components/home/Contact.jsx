import React from 'react';

export const Contact = () => {
    return (
        <>
            <div className='bg-port-gore-950 h-[50vh] w-full flex flex-col justify-center items-center text-white'>
                <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
                <p className='mb-8'>We're here to help and answer any questions you might have. We look forward to hearing from you!</p>
                <div className='flex space-x-4'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <footer className='bg-port-gore-950 text-white py-8'>
                    <div className='container mx-auto flex flex-col items-center'>
                        <h3 className='text-lg font-semibold'>Swastha Sewa</h3>
                        <p className='mb-4'>Your Health, Our Priority</p>
                        <p>&copy; 2024 Swastha Sewa. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};
