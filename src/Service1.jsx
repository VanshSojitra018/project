import React, { useEffect, useState } from "react";


import Header from "./Header";
import Service from "./Service";
import Testi from "./Testi";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Allfaq from "./Allfaq";
import Loader from "./Loader";

const Service1 = () => {
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
      <Introduction title="Services" title2="/ Service"/>
      <Service />
      <Testi />
      <Allfaq/>
      <Footer />
    </>
  );
};

export default Service1;
