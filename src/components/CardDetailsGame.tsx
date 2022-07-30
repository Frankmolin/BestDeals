import React from 'react'
import Page404 from '../pages/Page404'
import FormatePrice from '../utils/FormatePrice'
import { FormateStore } from '../utils/FormateStore'
import FormateTimestamp from '../utils/FormateTimestamp'

function CardDetailsGame({ details }: any) {
    
    const { gameInfo, cheapestPrice } = details
    const {steamRatingPercent, thumb, releaseDate, name, metacriticScore, gameID, salePrice, retailPrice, storeID } = gameInfo
    const { price, date } = cheapestPrice

    return (

        <div className="card my-3" >
            <div className="row align-items-center g-0">
                <div className="col-md-4">
                    <img src={thumb} className="img-fluid rounded" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} alt={gameID} />
                </div>
                <div className="col-md-8">
                    <div className="card-body p-0">
                        <h5 className="card-title ms-3 display-5">{name}</h5>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p className='mb-0'>Release date: {FormateTimestamp(releaseDate)}</p>
                <h1>Best price right now: <span className='text-success'>{salePrice != 0 ? FormatePrice(salePrice) : 'FREE'}</span></h1>
                <p>The store <span className='text-success'>{FormateStore(storeID)}</span> have this deal</p>
                {price &&
                    <h3 className='display-6'>Best Price in his history:
                        <span className='text-success'> {FormatePrice(price)}</span>
                        <br />The day <span className='text-success'>{FormateTimestamp(date)}</span>
                    </h3>}
                <p>Retail Price {FormatePrice(retailPrice)}</p>
                {metacriticScore != 0 ?
                    metacriticScore <= 60 ?
                        <>
                            <p className='m-0 text-muted fs-6'>metacritic {metacriticScore}/100</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: metacriticScore + '%' }} />
                            </div>
                        </>
                        :
                        <>
                            <p className='m-0 text-muted fs-6'>Metacritic {metacriticScore}/100</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: metacriticScore + '%' }} />
                            </div>
                        </>:<></>
                    
                }
                
                {steamRatingPercent!=0 ? steamRatingPercent <= 60 ?
                        <>
                            <p className='m-0 mt-2 text-muted fs-6'>Steam Rating {steamRatingPercent}/100</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: steamRatingPercent + '%' }} />
                            </div>
                        </>
                        :
                        <>
                            <p className='m-0 mt-2 text-muted fs-6'>Steam Rating {steamRatingPercent}/100</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-label="Animated striped example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: steamRatingPercent + '%' }} />
                            </div>
                        </>    :<></>            
                }
            </div>
        </div>

    )
}

export default CardDetailsGame