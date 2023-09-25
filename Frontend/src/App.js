import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginSignup from "./LoginSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TestComponent from "./components/TestComponent";

import GovernmentDashboard from "./components/GovernmentDashboard";
import Graphs from "./components/Graphs";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import SchoolDashboard from "./components/SchoolDashboard";
import SchoolForm from "./components/SchoolForm";

// import Footer from './components/Footer';
const App = () => {
  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/SchoolDashboard" element={<SchoolDashboard/>} >
           <Route path="Form" element={<SchoolForm/>}/>
           </Route>
          
          <Route path="/GovernmentDashboard" element={<GovernmentDashboard/>} >
          <Route path="graphs" element={<Graphs/>} />
          <Route path="charts" element={<Charts/>} />
          <Route path="table" element={<Tables/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
