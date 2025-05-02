import React from 'react'
import Header from '../components/Header/Header'
import OilTankCleaningComponent from '../components/OilGas/OilTankCleaningComponent'
import Efficiency from '../components/OilGas/Efficiency'
import Benefits from '../components/OilGas/Benefits'
import OurWorks from '../components/OilGas/OurWorks'
import Footer from '../components/Footer/Footer'


const page = () => {
  return (
    <div>
            <Header title='Oil Tank Cleaning & Disposal Services' subtitle=''/>
           <OilTankCleaningComponent/>
          <Efficiency/>
          <Benefits/>
          <OurWorks/>
         


     <Footer/> 
    </div>
  )
}

export default page
