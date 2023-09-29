import React, {useEffect} from 'react'
import Report from './reportWebVitals'

import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import axios from 'axios'

console.log(Report)
export default function App() {
  
  useEffect(() =>{
    (async() => {
    try{
      const result = await axios.get('https://stage.strapi.rupp.support/api/home?populate= Bannerr.Img')
      console.log(result)
    }catch(error){
      console.log(error)
    }
  })()
})
  return (
  <div className='mx-[5%]'>
    <Menu />
    <Footer />
  </div>
  )
}
