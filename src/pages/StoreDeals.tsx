import axios from 'axios'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import { v4 } from 'uuid'
import CardGame from '../components/CardGame'
import LayoutCards from '../components/LayoutCards'
import Spinner from '../components/Spinner'
import useFetch from '../utils/Usefetch'
import Page404 from './Page404'



function StoreDeals() {
    const { storeID } = useParams()
    const [page, setPage] = useState(0)
    const url = `https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageNumber=${page}`
    const [store, loading, setStore] = useFetch(`https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageNumber=0`)
    
    const addmore = () => {
        setPage((page) => page + 1)
        axios.get(url).then((data) => {
            setStore([...store, ...data.data])
        })
            .catch(error => console.error(error));

    }

    return (
        <>
            <div className='container'>
                {
                    loading || store.length == 0 && <Page404 />
                }
                {!loading ?

                    <InfiniteScroll
                        dataLength={store.length} //This is important field to render the next data
                        next={addmore}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                        className='m-4 row justify-content-center row-cols-1 row-cols-sm-4 row-cols-md-4 row-cols-lg-6 g-3'
                    >
                        {store.map((game: any) => <CardGame key={v4()} game={game} />)}
                    </InfiniteScroll>

                    :
                    <Spinner />

                }
            </div>
        </>
    )
}

export default StoreDeals