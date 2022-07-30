import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormatePrice from '../utils/FormatePrice'
import useFetch from '../utils/Usefetch'


function SearchBar() {
    const [value, setValue] = useState('')
    const url = `https://www.cheapshark.com/api/1.0/games?title=${value}&limit=15`
    let canceltoken = axios.CancelToken.source()
    const search = (e: any) => {
        setValue(data => data = e.target.value)
    }
    const [data, loading] = useFetch(url, canceltoken)
    return (
        <div className='container my-4'>
            <label className="form-label display-5 m-2">Search for a game:</label>
            <div className="form-group ">
                <input type="text" value={value} onChange={(e) => search(e)} className="form-control" placeholder="Search..." />
            </div>

            <div className='overflow-auto rounded' style={{ minHeight: '20vh', maxHeight: '50vh' }}>
                {!loading ?
                    <ul className='list-group '>
                        {data.map(({ thumb, external, cheapestDealID, gameID, cheapest }: { gameID: number, cheapest: number, thumb: string, external: string, cheapestDealID: string }) => {
                            return (
                                <Link key={cheapestDealID} to={'/game/' + cheapestDealID} className='p-0 list-group-item d-flex justify-content-start align-items-center list-group-item-action'>
                                    <img src={thumb} alt={external} style={{ width: '120px', height: '50px', objectFit: 'cover' }} />
                                    <p className='my-0 mx-2 fs-5 '>
                                        {external}
                                    </p>
                                    <p className='my-0 mx-2 text-muted fs-6'>
                                        Best deal
                                        <span className='text-success'> {FormatePrice(cheapest)}</span>
                                    </p>
                                </Link>
                            )

                        })}
                    </ul>
                    :
                    <div className='text-center mt-3'>
                        <span className="spinner-border spinner-border" role="status" aria-hidden="true"></span>

                    </div>
                }
            </div>

        </div>
    )
}

export default SearchBar