import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="row justify-content-between align-items-center py-3 my-4">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="mb-3 mb-md-0 text-muted">© 2023 Coletta Uliano</span>
                    </div>
                    <ul className="nav col-md-4 p-0 justify-content-lg-end list-unstyled">
                        <li><a className="nav-link footer-link" href="https://www.linkedin.com/in/culiano/" target="_blank"><i className="bi bi-linkedin"></i></a></li>
                        <li className="ms-3"><a className="nav-link footer-link" href="https://github.com/c-uliano" target="_blank"><i className="bi bi-github"></i></a></li>
                        <li className="ms-3"><a className="nav-link footer-link" href="https://www.behance.net/culiano" target="_blank"><i className="bi bi-behance"></i></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer;