import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Trip from "./pages/Trip";
import AccountSettings from "./pages/AccountSettings";
import More from "./pages/More";
import Loading from "./components/Loading";
import Logout from "./pages/Logout";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const setLoadingStateFalse = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <main>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/trips"
                element={<Trips loadingCallback={setLoadingStateFalse} />}
              />
              <Route path="/trips/:tripId" element={<Trip />} />
              <Route path="/settings" element={<AccountSettings />} />
              <Route path="/more" element={<More />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
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
