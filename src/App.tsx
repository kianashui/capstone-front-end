import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import AccountSettings from "./pages/AccountSettings";
import More from "./pages/More";

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/settings" element={<AccountSettings />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </Router>
      </main>
      <footer>
        <p> &copy;2022, Kiana Shui</p>
      </footer>
    </div>
  );
}

export default App;
