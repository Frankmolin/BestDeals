import axios from 'axios';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import useFetch from '../utils/Usefetch'
import CardGame from './CardGame'
import LayoutCards from './LayoutCards'
import Spinner from './Spinner'

function BestDeals() {
  const url = 'https://www.cheapshark.com/api/1.0/deals'
  
  const [Deals, loading] = useFetch(url)
  return (
    <div className='container'>
      <h1 className='text-bold display-3 text-center my-3'>Best Deals of the day</h1>
      <LayoutCards>
        {!loading ?

          Deals.map((game: any) =>{ return <CardGame key={uuidv4()} game={game} />})
          
          :
          <Spinner />
        }
      </LayoutCards>
    </div>
  )
}

export default BestDeals