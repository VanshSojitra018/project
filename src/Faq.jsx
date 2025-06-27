import React, { useEffect, useState } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Contact from "./Contact";
import Footer from "./Footer";
import Allfaq from "./Allfaq";
import Loader from "./Loader";

const Faq = () => {
  
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
      <Introduction title="FAQ" title2="/ FAQ" />
      <Allfaq />
      <Contact />
      <Footer />
    </>
  );

}
export default Faq;
