import React from 'react'
import { Link, useParams } from 'react-router-dom'
import CardDetailsGame from '../components/CardDetailsGame'
import Spinner from '../components/Spinner'
import useFetch from '../utils/Usefetch'
import Page404 from './Page404'

function GameDetails() {
    const { gameID } = useParams()
    //@ts-ignorets
    const url = `https://www.cheapshark.com/api/1.0/deals?id=${encodeURIComponent(gameID)}`
    const [data, loading] = useFetch(url)
    
    return (

        <div>
           
            {
                 loading==false&&data.length == 0 ? <Page404 />
                    :
                    !loading ?
                    <div className='container '>
                            <button className='btn btn-primary mt-3' onClick={()=>window.history.back()}>Volver</button>
                            <CardDetailsGame details={data} />
                        </div>
                        : 
                        <Spinner />
            }
        </div>
    )
}

export default GameDetails