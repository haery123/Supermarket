import React from "react";
// import ReactDom from "react-dom";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";


function App() {
  return (
    <>
    <Header />
    <Navigation />
    <Home />
    <Footer />
    </>
  );
}

export default App;
