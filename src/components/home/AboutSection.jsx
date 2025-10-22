import React from 'react'
import LiquidText from '../ui/LiquidText.jsx';

const AboutSection = () => {
    const texts = [
        "Creative Excellence",
        "Digital Mastery",
        "Cutting-Edge Design",
        "Professional Service"
    ];
    return (
        <div className='flex flex-col min-h-[70vh] items-center justify-center text-primary gap-8'>
            <h1 className='text-md md:text-xl font-light text-white'>What We Offers.</h1>
            <LiquidText texts={texts} className="font-black text-primary mb-32" />
        </div>
    )
}

export default AboutSection

