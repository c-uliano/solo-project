import React from 'react';
import Hero from './Hero';
import heroImg from '../assets/hero.png';

const About = () => {
    return (
        <>
            <Hero 
                image={heroImg} 
                h1Header={"About Me"} 
                content={"lorem ipsum etc etc."} 
            />
            <div className='container mt-4 mb-4'>

            </div>
        </>
    )
}

export default About;