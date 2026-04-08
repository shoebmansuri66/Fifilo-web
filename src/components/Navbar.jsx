import React, { Component } from "react";
import {  NavLink } from 'react-router-dom'
import '../App.css'
// import NavLinks from "./Components/NavLinks";

export default class Navbar extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="" style={{display:"flex"}}>
                        <h2 style={{color:"#e506ddff"}}>F</h2>
                        <h2 style={{color:"#d4bf05ff"}}>IF</h2>
                        <h2 style={{color:"#ec0662ff"}}>IL</h2>
                        <h2 style={{color:"#0aeb55ff"}}>O</h2>
                    </div>

                    <nav >
                        <NavLink to="/" onclick="setActive(this)" className="nav">Case Studies</NavLink>
                        <NavLink to="/r"onclick="setActive(this)" className="nav">About</NavLink>
                        <NavLink to="/Services"onclick="setActive(this)" className="nav">Services</NavLink>
                        <NavLink to="/about"onclick="setActive(this)" className="nav">Career</NavLink>
                        <NavLink to="/BLogs"onclick="setActive(this)" className="nav">Blogs</NavLink>
                        <NavLink to="/Contact"onclick="setActive(this)" className="nav">Contact</NavLink>
                        <span className="material-symbols-outlined"style={ {margin:"-10px",padding:"5px",fontSize:"35px", width:"50px",height:"50px"}}>
                            menu
                        </span>
                    </nav>
                </header>
               

            </>
        );
    }
}
