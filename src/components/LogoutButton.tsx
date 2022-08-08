import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";
import "./LogoutButton.css";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const Logout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <button className="logout-button" onClick={Logout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
