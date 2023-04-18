import React from 'react';
import { Link } from 'react-router-dom';
import "./headernav.css";

const HeaderNav = () => {

    // bootstap mobile nav doesn't automatically close on a SPA app, this is a workaround
    const handleCollapse = (e) => {
        let size = window.innerWidth;
        if (size < 992) {
            console.log("handleCollapse");
            var nav = document.getElementById("navbarNav");
            var btn = document.getElementById("navbarBtn");
            nav.classList.remove("show");
            btn.classList.add("collapsed");
        }
    };

    return (
        <>
            <header className="border-bottom border-primary">
                <nav className="navbar navbar-light navbar-expand-lg" aria-label="">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="/assets/logo-slate.png" alt="" />
                        </Link>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#my-navbar" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="my-navbar">
                            <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
                                <li className="nav-item ms-lg-4">
                                    <Link className="custom-link" to="/" onClick={handleCollapse}><i className="bi bi-house-door-fill"></i> Home</Link>
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <Link className="custom-link" to="/about" onClick={handleCollapse}><i className="bi bi-person-fill"></i> About</Link>
                                    {/* <a className="custom-link" href="/about"><i className="bi bi-person-fill"></i> About</a> */}
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <Link className="custom-link" to="/post" onClick={handleCollapse}><i className="bi bi-pencil-square"></i> Posts</Link>
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <a className="custom-link" href="https://www.linkedin.com/in/culiano/" target="_blank"><i className="bi bi-linkedin"></i> LinkedIn</a>
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <a className="custom-link" href="https://github.com/c-uliano" target="_blank"><i className="bi bi-github"></i> GitHub</a>
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <a className="custom-link" href="https://www.behance.net/culiano" target="_blank"><i className="bi bi-behance"></i> Behance</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderNav;