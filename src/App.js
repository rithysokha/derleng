import React, { Component } from 'react'
import Report from './reportWebVitals'
import { BrowserRouter as Router, Switch, Route,Routes, Link } from 'react-router-dom'
import AboutUs from './components/About Us/AboutUs'
import PlaceToGo from './components/Place to go/PlaceToGo'
import Home from './components/Home/Home'
import Place from './components/Place/Place'
import Faq from './components/Faq/Faq'


console.log(Report)
export default function App() {
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
