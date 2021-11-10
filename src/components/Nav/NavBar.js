import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top bg-dark text-white flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">

                    <li className="nav-item">
                        <Link className="nav-link" to="/login" style={{color: 'white'}}>Login </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/collections" style={{color: 'white'}}>View All Collections</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/learn" style={{color: 'white'}}>Learn more </Link>
                    </li>

                </ul>
                
            </nav>
        )
    }
}

export default NavBar