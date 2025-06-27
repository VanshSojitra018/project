import React, { useEffect, useState } from 'react'
import Header from './Header'
import Introduction from './Introduction'
import Pricingplans from './Pricingplans'
import Testi from './Testi'
import Advertise from './Advertise'
import Contact from './Contact'
import Footer from './Footer'
import Loader from './Loader'

const Pricingplans1 = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
      // Scroll to top on page load
      window.scrollTo(0, 0);
  
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <Loader />;
  return (
    <>
      <Header/>
      <Introduction title="Pricing Plans" title2="/ Pricing Plans"/>
      <Pricingplans/>
      <Testi />
      <Advertise/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Pricingplans1
