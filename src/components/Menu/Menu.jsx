import React from 'react'
import { BrowserRouter as Router, Switch, Route,Routes, Link } from 'react-router-dom'

import Home from '../Home/Home'
import AboutUs from '../About Us/AboutUs'
import PlaceToGo from '../Place to go/PlaceToGo'
import Place from '../Place/Place'
import Faq from '../Faq/Faq'


export default function Menu() {
  return (
    <Router>
    <div className='App'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/aboutus'>About Us</Link>
        </li>
        <li>
          <Link to='/placetogo'>Place to go</Link>
        </li>
        <li>
          <Link to='/place'>Place</Link>
          </li>
          <li>
          <Link to='/faq'>FAQ</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/placetogo' element={<PlaceToGo />} />
        <Route path='/place' element={<Place />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </div>
  </Router>
  )
}
