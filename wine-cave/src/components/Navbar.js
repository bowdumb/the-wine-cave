import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import'../styles/Navbar.css';


function Navbar() {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            <section className = "navbar">
                <div className = "navbar-content">
                    <h1 className = "navbar-title">
                        The Wine Cave
                    </h1>
                    <nav>
                        <div className = "navbar-links">
                            <NavLink
                            exact
                            to="/"
                            className = "nav-link"
                            activeClassName= "active-link"
                            onClick = {() => handleLinkClick("/")}
                            >
                                Home
                            </NavLink>
                            <NavLink
                            to="/about"
                            classname = "nav-link"
                            activeClassName = "active-link"
                            onClick = {() => handleLinkClick("/about")}
                            >
                                About
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
    )
};

export default Navbar