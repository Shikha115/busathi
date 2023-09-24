import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/main.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/Index";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import BusTrack from "./components/BusTrack";
import BusDetail from "./components/BusDetail";
import BusViewDetail from "./components/BusViewDetail";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Register" exact element={<Register />} />
          <Route path="/ForgetPasword" exact element={<ResetPassword />} />
          <Route path="/TrackYourBus" exact element={<BusTrack />} />
          <Route path="/BusDetail" exact element={<BusDetail />} />
          <Route path="/BusViewDetail" exact element={<BusViewDetail />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
