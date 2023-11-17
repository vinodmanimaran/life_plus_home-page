import React from 'react'
import './Labs.css'
import { Container } from 'react-bootstrap'
import Header from '../../Components/Header/Header.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import TestAccordion from '../../Components/TestAccordions/TestAccordion.jsx'
import FAQ from '../../Components/FAQ/FAQ.jsx'
import HealthCheckup from '../../Components/HealthCheckups/HealthCheckup.jsx'
import HealthQuery from '../../Components/HealthQuery/HealthQuery.jsx'
import Tests from '../../Components/Tests/Tests.jsx';
import labHeader from '../../Components/labHeader/labHeader.jsx';
import labSearchbar from '../../Components/labSearchbar/labSearchbar.jsx'


const Labs = () => {
  return (
    <>
      <Header />

    <Container>      

<labSearchbar/>
<labHeader/>
<Tests/>
<HealthQuery/>
<FAQ/>
<HealthCheckup/>
<TestAccordion/>
<Footer/>
    </Container>
    </>
    
  )
}

export default Labs