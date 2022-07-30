import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className="container-fluid bg-dark">
            <header className="d-flex justify-content-center py-1">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to='/' className="nav-link px-2 text-white fs-3" aria-current="page">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/stores' className="nav-link px-2 text-white fs-3">
                            Stores
                        </Link>
                    </li>
                </ul>
            </header>
        </div>



    )
}

export default Navbar