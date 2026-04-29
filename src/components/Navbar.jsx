import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    // Menu open/close function
    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    };

    render() {
        const { isMenuOpen } = this.state;

        // Nav Links Data
        const navLinks = [
            { path: "/", name: "Case Studies" },
            { path: "/career", name: "About" },
            { path: "/Services", name: "Services" },
            { path: "/carier1", name: "Career" },
            { path: "https://fifilo.com/blogs/", name: "Blogs" },
            { path: "/Contact", name: "Contact" }
        ];

        // Active Link Style Logic
        const getActiveStyle = (isActive) => ({
            color: isActive ? "#d4bf05ff" : "white",
            borderBottom: isActive ? "2px solid #d4bf05ff" : "none",
            textDecoration: "none",
            fontWeight: "bold",
            paddingBottom: "5px"
        });

        return (
            <>
                {/* --- FIXED NAVBAR --- */}
                <header 
                    className="fixed-top w-100 py-3 px-md-5 px-3 d-flex justify-content-between align-items-center"
                    style={{ 
                        backgroundColor: "rgba(0, 0, 0, 0.95)", 
                        zIndex: 1050, 
                        borderBottom: "1px solid #333" 
                    }}
                >
                    {/* LOGO */}
                    <div className="d-flex align-items-center mb-0">
                        <h2 className="mb-0" style={{ color: "#e506ddff" }}>F</h2>
                        <h2 className="mb-0" style={{ color: "#d4bf05ff" }}>IF</h2>
                        <h2 className="mb-0" style={{ color: "#ec0662ff" }}>IL</h2>
                        <h2 className="mb-0" style={{ color: "#0aeb55ff" }}>O</h2>
                    </div>

                    {/* DESKTOP NAV */}
                    <nav className="d-none d-lg-flex align-items-center gap-4">
                        {navLinks.map((link, index) => (
                            <NavLink 
                                key={index} 
                                to={link.path} 
                                style={({ isActive }) => getActiveStyle(isActive)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* MENU ICON (HAMBURGER) */}
                    <div className="ms-3" onClick={this.toggleMenu} style={{ cursor: "pointer" }}>
                        <Menu color="white" size={30} />
                    </div>
                </header>

                {/* --- SLIDE-UP OVERLAY MENU --- */}
                <div 
                    className="position-fixed w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                    style={{
                        top: 0,
                        left: 0,
                        backgroundColor: "black",
                        zIndex: 2000,
                        transition: "transform 0.5s ease-in-out",
                        transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
                    }}
                >
                    {/* Close Button inside Overlay */}
                    <div 
                        className="position-absolute" 
                        style={{ top: "30px", right: "50px", cursor: "pointer" }}
                        onClick={this.toggleMenu}
                    >
                        <X color="white" size={40} />
                    </div>

                    {/* Overlay Links */}
                    <div className="d-flex flex-column gap-4 text-center">
                        {navLinks.map((link, index) => (
                            <NavLink 
                                key={index} 
                                to={link.path} 
                                onClick={this.toggleMenu}
                                style={({ isActive }) => ({
                                    fontSize: "2.5rem",
                                    color: isActive ? "#d4bf05ff" : "white",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    transition: "0.3s"
                                })}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Navbar Spacer: Content ko upar dabne se bachane ke liye */}
                <div style={{ height: "80px" }}></div>
            </>
        );
    }
}