import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/main.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/Index";
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Index />
      {/* <Footer /> */}
    </>
  );
}

export default App;
