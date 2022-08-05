import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Logout = () => {
  const { logout } = useAuth0();
  const Logout = () => {
    logout({ returnTo: window.location.origin });
  };

  Logout();

  return (
    <div className="logout">
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
