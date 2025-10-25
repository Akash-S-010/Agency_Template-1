import React from 'react'
import LiquidText from '../ui/LiquidText.jsx';

const TextAnimeSection = () => {
    const texts = [
        "Creative Excellence",
        "Digital Mastery",
        "Cutting-Edge Design",
        "Professional Service"
    ];
    return (
        <div
            className='flex flex-col min-h-[60vh] items-center justify-center border-t border-b border-primary/10 text-primary gap-8 bg-cover bg-center bg-no-repeat'
        >
            <h1 className='text-md md:text-xl font-light text-white'>What We Offers.</h1>
            <LiquidText texts={texts} className="font-medium text-primary mb-16" />
        </div>
    )
}

export default TextAnimeSection

