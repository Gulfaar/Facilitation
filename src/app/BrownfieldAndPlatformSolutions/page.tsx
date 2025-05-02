import React from 'react'
import Header from '../components/Header/Header'
import BrownfieldAndPlatformSolutions from '../components/BrownfieldandPlatformSolutions/BrownfieldAndPlatformSolutions'
import Efficiency from '../components/OilGas/Efficiency'
import Benefits from '../components/OilGas/Benefits'
import OurWorks from '../components/OilGas/OurWorks'
import Footer from '../components/Footer/Footer'


const page = () => {
  return (
    <div>
        <Header title='Brownfield And PlatformSolutions' subtitle=''/>
        <BrownfieldAndPlatformSolutions/>
        <Efficiency/>
        <Benefits/>
        <OurWorks/>
        
        <Footer/>
      
    </div>
  )
}

export default page
