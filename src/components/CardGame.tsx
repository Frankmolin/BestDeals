import React from 'react'
import { Link } from 'react-router-dom'
import FormatePrice from '../utils/FormatePrice'


function CardGame({ game }: any) {
    const { title, thumb,dealID,savings, salePrice, normalPrice } = game
    
    return (
        <div className='col-6' >
            <div className="card" >
                <img src={thumb} style={{width:'100%',height:'45px',objectFit:'cover'}} className="card-img-top" alt={title} />
                <div className="card-body">
                    <p className="card-title text-center text-truncate">{title}</p>
                    <p className='fs-6 text-center'>{salePrice===normalPrice?<span >{FormatePrice(normalPrice)}</span>:salePrice == 0 ? <span className='text-success'>'FREE'</span> : <span><span className='text-success'>{FormatePrice(salePrice)}/</span><span>{normalPrice}</span></span>}</p>                    
                    <Link to={'/game/'+dealID} className='mt-3 btn-sm btn btn-link'>Saber mas...</Link>
                </div>
            </div>

        </div>
    )
}

export default CardGame