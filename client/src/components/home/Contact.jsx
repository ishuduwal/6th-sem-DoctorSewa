import React from 'react';

export const Contact = () => {
    return (
        <>
            <div className='bg-port-gore-950 h-auto w-full text-white py-16'>
                <div className='max-w-6xl mx-auto px-4'>
                    <section className='mb-16'>
                        <h2 className='text-4xl font-bold mb-4 text-center'>Contact Us</h2>
                        <p className='mb-8 text-center max-w-xl mx-auto'>We're here to help and answer any questions you might have. We look forward to hearing from you!</p>
                        <div className='flex justify-center space-x-6 mb-8'>
                            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                                <i className="fa-brands fa-facebook text-2xl"></i>
                            </a>
                            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                                <i className="fa-brands fa-instagram text-2xl"></i>
                            </a>
                            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                                <i className="fa-brands fa-twitter text-2xl"></i>
                            </a>
                            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                                <i className="fa-brands fa-linkedin text-2xl"></i>
                            </a>
                        </div>
                    </section>

                    <section className='text-center mb-16'>
                        <h2 className='text-3xl font-bold mb-4'>Subscribe to Our Newsletter</h2>
                        <div className='flex justify-center items-center'>
                            <input type='email' placeholder='Enter your email' className='p-2 w-96 text-black rounded-l-md' />
                            <button className='bg-white text-port-gore-950 p-2 ml-2 rounded-r-md font-bold'>Subscribe</button>
                        </div>
                    </section>

                    <section className='mb-16'>
                        <h2 className='text-3xl font-bold mb-4 text-center'>Our Services</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                            <div className='bg-white text-port-gore-950 p-4 rounded shadow'>
                                <h3 className='text-xl font-semibold mb-2'>Specialist Doctor</h3>
                                <p>Get access to top-notch specialist doctors for all your healthcare needs.</p>
                            </div>
                            <div className='bg-white text-port-gore-950 p-4 rounded shadow'>
                                <h3 className='text-xl font-semibold mb-2'>Easy Appointments</h3>
                                <p>Book appointments with ease through our user-friendly platform.</p>
                            </div>
                            <div className='bg-white text-port-gore-950 p-4 rounded shadow'>
                                <h3 className='text-xl font-semibold mb-2'>24/7 Support</h3>
                                <p>We provide round-the-clock support for any healthcare inquiries.</p>
                            </div>
                            <div className='bg-white text-port-gore-950 p-4 rounded shadow'>
                                <h3 className='text-xl font-semibold mb-2'>Comprehensive Care</h3>
                                <p>Our services cover a wide range of healthcare needs for all ages.</p>
                            </div>
                        </div>
                    </section>

                    <section className='text-center mb-4'>
                        <h2 className='text-3xl font-bold mb-4'>Contact Information</h2>
                        <p className='mb-2'><i className="fa-solid fa-envelope pr-2"></i>swasthasewa@gmail.com</p>
                        <p><i className="fa-solid fa-phone pr-2"></i>+123 456 7890</p>
                    </section>

                    <footer className='bg-port-gore-950 text-white py-4 text-center'>
                        <h3 className='text-lg font-semibold'>Swastha Sewa</h3>
                        <p className='mb-2'>Your Health, Our Priority</p>
                        <p>&copy; 2024 Swastha Sewa. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </>
    );
};
