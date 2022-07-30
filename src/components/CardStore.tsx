import React from 'react'
import { Link } from 'react-router-dom'

function CardStore({ data }:any) {
    const {storeName, images, storeID}=data
    return (
        <div className="col-4" >
            <div className='card border-0'>
                <Link to={storeID}>
                    <img src={'https://www.cheapshark.com/' + images.logo} className="card-img-top" alt={storeName} />
                </Link>
                <p className="fs-5 text-muted text-center">{storeName}</p>
            </div>
        </div>
    )
}

export default CardStore