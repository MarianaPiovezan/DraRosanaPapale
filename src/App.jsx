import React from "react";
import Header from "./components/Header/NavBar/Header";
import RightNav from "./components/Header/RightNav/RightNav";
import Home from "./pages/home/Home";
import Specialties from "./pages/Specialties/Specialties";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Location from "./pages/Location/Location";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/global.css";


export default function App() {
  return (
    <>
      <Header  />
      <RightNav />
      <Home />
      <Specialties />
      <About />
      <Blog />
      <Location />
      <Contact />
      <Footer />
    </>
  );
}