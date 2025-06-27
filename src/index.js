import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About1 from "./About1";
import Service1 from "./Service1";
import Portfoliogrid from "./Portfoliogrid";
import Portfolioslider from "./Portfolioslider";
import Pricingplans1 from "./Pricingplans1";
import Team from "./Team";
import Teammembar from "./Teammembar";
import Faq from "./Faq";
import Contactus from "./Contactus";
import Error from "./Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About1/>}/>
      <Route path="/service" element={<Service1/>}></Route>
      <Route path="/portfolioGird" element={<Portfoliogrid/>}></Route>
      <Route path="/portfolioSlider" element={<Portfolioslider/>}></Route>
      <Route path="/PricingPlans" element={<Pricingplans1/>}></Route>
      <Route path="/OurTeam" element={<Team/>}></Route>
      <Route path="/TeamMember" element={<Teammembar/>}></Route>
      <Route path="/FAQ" element={<Faq/>}></Route>
      <Route path="/404" element={<Error/>}></Route>
      <Route path="/ContactUs" element={<Contactus/>}></Route>
    </Routes>
  </BrowserRouter>
);
