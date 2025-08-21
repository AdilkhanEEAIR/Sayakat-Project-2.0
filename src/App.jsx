import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Tours from './pages/Tours.jsx'
import TourDetail from './pages/TourDetail.jsx'
import Flights from './pages/Flights.jsx'
import CartPage from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'
import ScrollTop from './components/ScrollTop.jsx'

export default function App(){
  const location = useLocation()
  useEffect(()=>{ document.title = 'SAYAKAT' },[])
  return (<div><Header/>
    <AnimatePresence mode='wait'>
      <motion.main key={location.pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.2}}>
        <Routes location={location}>
          <Route path='/' element={<Home/>}/>
          <Route path='/tours' element={<Tours/>}/>
          <Route path='/tours/:id' element={<TourDetail/>}/>
          <Route path='/flights' element={<Flights/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </motion.main>
    </AnimatePresence>
    <ScrollTop/>
<Footer/></div>)}