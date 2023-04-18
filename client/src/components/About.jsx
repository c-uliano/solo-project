import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';

const About = () => {
    return (
        <>
            <Hero 
                image={"/assets/hero.png"} 
                h1Header={"About Me"} 
                content={"lorem ipsum etc etc."} 
            />
            <div className='container mt-4 mb-4'>
                <div className="row flex-lg-row-reverse align-items-center py-5">
                    <div className="col-10 col-sm-8 col-lg-6 mx-auto mb-4 mb-lg-0">
                        <img src="/assets/cu.jpg" className="d-block img-fluid rounded-circle m-auto" alt="" loading="lazy" width="400" height="400" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Hello all,<br />you can call me Colette</h1>
                        <p className="lead">I'm a frontend web app developer for a cyber security firm, with 6 years of experience as a website developer. My skills include HTML, CSS, JavaScript, React, MongoDB, Express, & Node.</p>
                        <p className="lead">I also have 10 years experience as a graphic designer, specializing in logo design and brand identity. I use tools like Adobe Illustrator, InDesign, Photoshop, & XD.</p>
                        {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="mailto: culiano@live.com" className="btn btn-primary btn-lg px-4 me-md-2">Let's Work Together <i className="bi bi-arrow-right-short"></i></a>
                        </div> */}
                    </div>
                </div>
                <h2 class="mb-4"><span class="small text-black-50">The Fun Stuff,</span><br />My Portfolio</h2>
                <Portfolio />
            </div>

        </>
    )
}

export default About;