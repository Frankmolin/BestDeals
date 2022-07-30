import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-5">
                <h1 className="display-1 fw-bold text-white">Deals Games</h1>
                <div className="col-lg-6 mx-auto mt-2">
                    <h3 className=''>  Find the best offer for that game you want</h3>
                    <p className="fs-5 ">Among the <Link to='/stores' className=''>main digital stores</Link> , find the one that best suits your budget!</p>
                </div>
            </div>
        </div>

    )
}

export default Hero