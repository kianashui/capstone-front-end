import { useAuth0 } from "@auth0/auth0-react";
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

  const setLoadingStateFalse = () => {
    setLoading(false);
  };

  const { user, isAuthenticated } = useAuth0();
  const [userId, setUserId] = useState("");

  const changeUserId = () => {
    if (user !== undefined && isAuthenticated) {
      const id: string = user.sub as string;
      setUserId(id);
    }
  };

  useEffect(changeUserId, [user, isAuthenticated]);

  return (
    <div className="App">
      {loading ? (
        <div>
          <Loading loadingActive={loading} />
        </div>
      ) : (
        <></>
      )}

      <main>
        <Navbar user={user} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userId={userId}
                user={user}
                loadingCallback={setLoadingStateFalse}
              />
            }
          />
          <Route
            path="/trips"
            element={
              <Trips userId={userId} loadingCallback={setLoadingStateFalse} />
            }
          />
          <Route
            path="/trips/:tripId"
            element={
              <Trip userId={userId} loadingCallback={setLoadingStateFalse} />
            }
          />
          <Route
            path="/settings"
            element={
              <AccountSettings
                userId={userId}
                user={user}
                loadingCallback={setLoadingStateFalse}
              />
            }
          />
          <Route
            path="/more"
            element={
              <More userId={userId} loadingCallback={setLoadingStateFalse} />
            }
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
      <footer>
        <p> &copy;2022, Kiana Shui</p>
      </footer>
    </div>
  );
}

export default App;
