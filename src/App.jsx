import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import RentalBooking from "./components/carrentalbook";
import Brand from "./components/brand";
import OurFleet from "./components/fleet";
import Footer from "./components/footer";
import Faq from "./components/faq";
import WhyUs from "./components/whyus";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CardDetail from "./pages/cardetail";
import ExploreCars from "./pages/explorecars";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import AboutUs from "./pages/aboutus";
// import CarRentalBooking from "./components/CarRentalBooking";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
     <>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <Header data={landingPageData.Header} />
            <Brand />
            <RentalBooking data={landingPageData.car} />
            <OurFleet data={landingPageData.car} />
            {/* <Features data={landingPageData.Features} /> */}
            {/* <About data={landingPageData.About} /> */}
            {/* <Services data={landingPageData.Services} /> */}
            {/* <Testimonials data={landingPageData.Testimonials} /> */}
            <WhyUs />
            <Faq data={landingPageData.faq} />
            <Footer />
          </>
        }
      />
      <Route path="/:slug" element={<CardDetail faq={landingPageData.faq} data={landingPageData.car}/>} />
      <Route path="/explorescar" element={<ExploreCars  data={landingPageData.car}/>} />
      <Route path="/signin" element={<SignIn  data={landingPageData.car}/>} />
      <Route path="/signup" element={<SignUp ></SignUp>} />
      <Route path="/aboutus" element={<AboutUs/>} />

      {/* <CarRentalBooking/> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      {/* <Contact data={landingPageData.Contact} /> */}
    </Routes>
    {/* <Link to={"/car/e"}>testvp</Link> */}
    </>
    // </Router>
  );
};

export default App;
