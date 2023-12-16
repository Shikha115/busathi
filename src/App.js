import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/main.scss";
import 'swiper/css/bundle';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/Index";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import BusTrack from "./components/BusTrack";
import BusDetail from "./components/BusDetail";
import BusViewDetail from "./components/BusViewDetail";
import Dashboard from "./components/Dashboard";
import SafetyAlarm from "./components/SafetyAlarm";
import EmergencyStop from "./components/EmergencyStop";
import About from "./components/About";
import SafetyFeature from "./components/SafetyFeature";
import AllBuses from "./components/AllBuses";

function App() {
 
  
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Register" exact element={<Register />} />
          <Route path="/ForgetPasword" exact element={<ResetPassword />} />
          <Route path="/TrackYourBus" exact element={<BusTrack />} />
          <Route path="/BusDetail" exact element={<BusDetail />} />
          <Route path="/BusViewDetail" exact element={<BusViewDetail />} />
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route path="/SafetyAlarm" exact element={<SafetyAlarm />} />
          <Route path="/EmergencyStop" exact element={<EmergencyStop />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Safety-Feature" exact element={<SafetyFeature />} />
          <Route path="/Search-Bus" exact element={<AllBuses />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
