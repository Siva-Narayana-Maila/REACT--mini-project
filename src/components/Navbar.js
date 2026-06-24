//import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TextUtils</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About us</Link>
                </li>
                </ul>
                <div className="form-check form-switch mx-3">
                    <input onClick={props.modeToggle} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                    <label className="form-check-label" htmlFor="switchCheckDefault" style={{color:"black"}}>
                        Enable {props.mode === "dark" ? "Light" : "Dark"} Mode
                    </label>
                </div>
            
            </div>
        </div>
    </nav>
    );
}

export default Navbar;
