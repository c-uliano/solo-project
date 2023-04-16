import React from 'react';
import Hero from './Hero';
import heroImg from '../assets/hero.png';

const Homepage = () => {
    return (
        <>
            <Hero 
                image={heroImg} 
                h1Header={"Hello all, I'm Colette"} 
                content={"lorem ipsum etc etc."} 
                bgPosition={"center 40%"}
            />
        </>
    )
}

export default Homepage;