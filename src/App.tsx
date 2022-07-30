import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import GameDetails from './pages/GameDetails'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import StoreDeals from './pages/StoreDeals'
import Stores from './pages/Stores'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stores' element={<Stores/>}/>
        <Route path='/game/:gameID' element={<GameDetails/>}/>
        <Route path='/stores/:storeID' element={<StoreDeals/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
