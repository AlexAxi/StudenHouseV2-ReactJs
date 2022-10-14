import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Events from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";
import Error from "./pages/Error";
import btnStyle from './components/global/styles/button/Button.module.css'

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Volunteers from "./pages/Volunteers";
import Caffe from "./pages/Caffe";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import CaffeSection from "./components/homePage/CaffeSection";
import { Helmet } from "react-helmet";
import Privacy from "./pages/Privacy";
import CookieConsent from "react-cookie-consent";

function App() {
  
  return (
    <>
      <Helmet>
        <title>Student House</title>
        <meta
          name="description"
          content="Student House is a venue located in the center of Aalborg which hosts social events. It consists of a café, concert hall, study rooms and is run by volunteers."
        />
        <meta
          name="keywords"
          content="Student House, Cafe Aalborg, Volunteer Aalborg, Study Place, Aalborg Events, Study Cafe"
        />
      </Helmet>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events/" component={Events} />
        <Route exact path="/events/:slug" component={SingleEvent} />
        <Route exact path="/volunteers/" component={Volunteers} />
        <Route exact path="/cafe/" component={Caffe} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/facilities/" component={Facilities} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/booking/" component={Booking} />
        <Route exact path="/#hours" component={CaffeSection} />
        <Route exact path="/privacy-policy" component={Privacy} />
        ...
        <Route>
          <Error></Error>
        </Route>
      </Switch>
      <Footer />
     
        <CookieConsent
          location="bottom"
          buttonText="I UNDERSTAND"
          cookieName="Cookie Consent"
          style={{ background: "#57595e", display:"flex", paddingLeft:"3.8vw", paddingRight:"4.3vw" }}
          disableButtonStyles
          buttonStyle={{
            // color: "white",
            // fontSize: "16px",
            // backgroundColor: "#ffb11f",
            // height:"40px"
          
          }}
          buttonClasses={btnStyle.btnPrivacy}
          expires={150}
          
        >
          <p style={{ fontSize: "18px" }}> This website uses cookies to enhance your experience.   <a className={btnStyle.aPrivacy} href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              READ COOKIE AND PRIVACY POLICY
            </a></p>
         
         
          
         
          
        </CookieConsent>
     
    </>
  );
}

export default App;
