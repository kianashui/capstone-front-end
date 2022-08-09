// import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {user !== undefined && isAuthenticated && (
        <div>
          {/* <img src={user.picture} alt={user.name} /> */}
          <h2 className="user-name">{user.name}</h2>
          <h2 className="user-given_name">{user.given_name}</h2>
          <h2 className="user-family_name">{user.family_name}</h2>
          <p className="user-user-id">{user.sub}</p>
          <p className="user-email">{user.email}</p>
          {/* <img src={user.picture} alt="user" /> */}
        </div>
      )}
    </div>
  );
};

export default Profile;
