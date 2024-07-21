import React from 'react'
import about from '../../assets/about.jpg'
export const About = () => {
    return (
        <>
            <div className='flex px-20 justify-between w-full items-center h-[80vh] max-lg:flex-col max-lg:px-8 max-lg:gap-4 max-lg:mb-24'>
                <div>
                    <img className='w-3/4 max-lg:w-auto' src={about} />
                </div>
                <div className='max-w-xl'>
                    <h1 className='text-2xl font-black mb-4'>About Us</h1>
                    <p className='mb-4'>From general check-ups to specialist consultations, we make it simple to find the right doctor for you.Swastha Sewa aims to simplify your healthcare journey by connecting you with top healthcare professionals quickly and efficiently.</p>
                    <p> Whether you need a routine check-up or a specialist consultation, our platform helps you find and book the right doctor in just a few clicks.Our network includes trusted doctors from various fields, ensuring you receive the best care. You can browse detailed profiles, read reviews, and choose appointment times that fit your schedule. We prioritize your health, privacy, and security, making sure your information is safe with us.</p>
                </div>
            </div>
        </>
    )
}
