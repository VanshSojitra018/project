import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Pricingplans from "./Pricingplans";
import Blog from "./blog";
import Blogsection from "./Blogsection";
import Hero from "./Hero";
import Header from "./Header";
import Service from "./Service";
import About from "./About";
import Choose from "./Choose";
import Info from "./Info";
import Portfolio from "./Portfolio";
import Advertise from "./Advertise";
import Testi from "./Testi";
import Loader from "./Loader";

const Home = () => {
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
      <Header />
      <Hero />
      <Service/>
      <About/>
      <Choose/>
      <Info/>
      <Portfolio/>
      <Advertise/>
      <Pricingplans />
      <Testi/>
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
