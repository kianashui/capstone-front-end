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
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const setLoadingStateFalse = () => {
    setLoading(false);
  };

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userId, setUserId] = useState("");

  const changeUserId = () => {
    if (user !== undefined && isAuthenticated) {
      const id: string = user.sub as string;
      setUserId(id);
    }
  };

  useEffect(changeUserId, [user, isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <main>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home userId={userId} />} />
              <Route
                path="/trips"
                element={
                  <Trips
                    userId={userId}
                    loadingCallback={setLoadingStateFalse}
                  />
                }
              />
              <Route path="/trips/:tripId" element={<Trip userId={userId} />} />
              <Route
                path="/settings"
                element={<AccountSettings userId={userId} />}
              />
              <Route path="/more" element={<More userId={userId} />} />
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
