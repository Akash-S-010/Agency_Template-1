import React from 'react'
import LiquidText from '../ui/LiquidText.jsx';
import backgroundImage from '../../assets/LiquidText_Background.jpg';

const AboutSection = () => {
    const texts = [
        "Creative Excellence",
        "Digital Mastery",
        "Cutting-Edge Design",
        "Professional Service"
    ];
    return (
        <div
            className='flex flex-col min-h-[60vh] items-center justify-center text-primary gap-8 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <h1 className='text-md md:text-xl font-light text-white'>What We Offers.</h1>
            <LiquidText texts={texts} className="font-black text-primary mb-16" />
        </div>
    )
}

export default AboutSection

