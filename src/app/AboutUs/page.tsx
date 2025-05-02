import React from 'react'
import Header from '../components/Header/Header'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'


const page = () => {
  return (
    <div>
        <Header title='About Us' subtitle='Connecting Businesses, Building Global Success!"'/>

        <AboutUs/>

        <Footer/>
      
    </div>
  )
}

export default page
