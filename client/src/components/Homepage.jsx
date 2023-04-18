import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import "./homepage.css";

const Homepage = () => {
    return (
        <>
            <Hero 
                image={"/assets/hero.png"} 
                h1Header={"Hello all, I'm Colette"} 
                content={"Software Engineer & Graphic Designer"} 
                bgPosition={"center 40%"}
            />
            <div className='container mt-4 mb-4'>
                <section className='about'>
                    <div className="row gx-lg-5">
                        <div className="col-lg-6">
                            <h2 className="mb-4"><span className="small text-black-50">These Are My</span><br />Current Skills</h2>
                            <div className="row">
                                <div className="col-sm-6 mb-4">
                                    <div className="card h-100 border-0 text-white bg-secondary bg-opacity-75 py-4">
                                        <div className="card-body">
                                            <div><i className="fa-brands fa-html5 me-2"></i><i className="bi bi-filetype-css"></i></div>
                                            <h5 className="card-title decorative_line">HTML & CSS</h5>
                                            <p className="card-text">Including Bootstrap and scss</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="card h-100 border-0 text-white bg-secondary bg-opacity-75 py-4">
                                        <div className="card-body">
                                            <div><i className="bi bi-filetype-js"></i></div>
                                            <h5 className="card-title decorative_line">JavaScipt</h5>
                                            <p className="card-text">Additional functionality and animation</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="card h-100 border-0 text-white bg-secondary bg-opacity-75 py-4">
                                        <div className="card-body">
                                            <div><i className="bi bi-columns-gap"></i></div>
                                            <h5 className="card-title decorative_line">UX/UI</h5>
                                            <p className="card-text">Using Adobe XD and Figma</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="card h-100 border-0 text-white bg-secondary bg-opacity-75 py-4">
                                        <div className="card-body">
                                            <div><i className="bi bi-filetype-ai"></i></div>
                                            <h5 className="card-title decorative_line">Graphic Design</h5>
                                            <p className="card-text">Logo design and branding using Adobe Illustrator, Photoshop, InDesign</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <h2 className="mb-4"><span className="small text-black-50">This Is My</span><br />Education</h2>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p>from Oct 2022<br />to April 2023</p>
                                </div>
                                <div className="col-sm">
                                    <h5>Coding Dojo</h5>
                                    <p>Working on Software Development Certificate of Achievement, Python Full Stack & MERN Full Stack</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p>from 2012<br />to 2013</p>
                                </div>
                                <div className="col-sm">
                                    <h5>Cleveland State University, Cleveland Ohio</h5>
                                    <p>Certificate in Graphic Design<br />Dean’s List, Spring Semester 2013</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p>from 2005<br />to 2007</p>
                                </div>
                                <div className="col-sm">
                                    <h5>Lorain County Community College, Elyria Ohio</h5>
                                    <p>Associate Degree in Business</p>
                                </div>
                            </div>
                        </div>


                        
                    </div>
                </section>

                <h2 className="mb-4"><span className="small text-black-50">The Fun Stuff,</span><br />My Portfolio</h2>
                <Portfolio />
            </div>
        </>
    )
}

export default Homepage;