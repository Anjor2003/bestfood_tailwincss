import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadLineCards from "./components/HeadLineCards";
import Foods from "./components/Foods";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <HeadLineCards/>
     <Foods  />
     <Category/>
     <Footer/>
    </div>
  );
}

export default App;
