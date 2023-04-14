import React from 'react';
import logo from '../assets/logo-slate.png';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <>
            <header className="border-bottom border-primary">
                <nav className="navbar navbar-light navbar-expand-lg" aria-label="">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" />
                        </Link>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#my-navbar" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="my-navbar">
                            <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
                                <li className="nav-item ms-lg-3">
                                    <Link className="nav-link" to="/"><i className="bi bi-house-door-fill"></i> Home</Link>
                                </li>
                                <li className="nav-item ms-lg-3">
                                    <Link className="nav-link" to="/about"><i className="bi bi-person-fill"></i> About</Link>
                                </li>
                                <li className="nav-item ms-lg-3">
                                    <Link className="nav-link" to="/post"><i className="bi bi-pencil-square"></i> Posts</Link>
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