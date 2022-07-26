import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Trip from "./pages/Trip";
import AccountSettings from "./pages/AccountSettings";
import More from "./pages/More";
import Loading from './components/Loading';
import {useState, useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
    {loading ? <Loading/> : (
      <div className="App">
        <main>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trips" element={<Trips />} />
              <Route path="/trips/:tripId" element={<Trip/>} />
              <Route path="/settings" element={<AccountSettings />} />
              <Route path="/more" element={<More />} />
            </Routes>
          </Router>
        </main>
        <footer>
          <p> &copy;2022, Kiana Shui</p>
        </footer>
      </div>
      )}
    </>
  );
}

export default App;
