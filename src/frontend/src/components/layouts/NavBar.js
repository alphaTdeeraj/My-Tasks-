import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar  navbar-light bg-light">
                    <span className="navbar-brand my-3 leadf mt-3">Home</span>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link h1 lead mt-2" href="#">Login</a>
                        </li>
                        <li className='mt-3'>|</li>
                        <li className="nav-item">
                            <a className="nav-link h1 lead mt-2" href="#">Register</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar
