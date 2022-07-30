import React from 'react'
import { Link } from 'react-router-dom'
import CardStore from '../components/CardStore'
import LayoutCards from '../components/LayoutCards'
import Spinner from '../components/Spinner'
import { stores } from '../utils/FormateStore'
import useFetch from '../utils/Usefetch'

type store = {
  storeID: any
  storeName: string
  images: {
    banner: string
    icon: string
    logo: string
  }

}

function Stores() {


  return (
    <div className='container'>
      <div className="album py-5 bg-light">
        <div className="container">
          {
            <LayoutCards>
              {
                stores.filter((data: any) => data.isActive)
                  .map((data: store) => { return <CardStore key={data.storeID} data={data} /> })
              }
            </LayoutCards>
          }


        </div>
      </div>

    </div>
  )
}

export default Stores