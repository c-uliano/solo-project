import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <>
            <header className="border-bottom border-lg-0 border-primary">
                <nav className="navbar navbar-light navbar-expand-lg" aria-label="">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="assets/logo-slate.png" alt="" />
                        </a>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#my-navbar" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="my-navbar">
                            <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
                                <li className="nav-item ms-lg-3">
                                    <a className="nav-link" href="/"><i className="bi bi-house-door-fill"></i> Home</a>
                                </li>
                                <li className="nav-item ms-lg-3">
                                    <a className="nav-link" href="/about"><i className="bi bi-person-fill"></i> About</a>
                                </li>
                                <li className="nav-item ms-lg-3">
                                    <a className="nav-link" href="/post"><i className="bi bi-linkedin"></i> Posts</a>
                                </li>
                                <li className="nav-item ms-lg-3">
                                    <a className="nav-link" href="https://www.linkedin.com/in/culiano/" target="_blank"><i className="bi bi-linkedin"></i> LinkedIn</a>
                                </li>
                                <li className="nav-item ms-lg-3">
                                    <a className="nav-link" href="https://github.com/c-uliano" target="_blank"><i className="bi bi-github"></i> GitHub</a>
                                </li>
                                <li className="nav-item ms-lg-3">
                                    <a className="nav-link" href="https://www.behance.net/culiano" target="_blank"><i className="bi bi-behance"></i> Behance</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderNav