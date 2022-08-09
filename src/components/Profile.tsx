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
          <h2 className="user__name">{user.name}</h2>
          <h2 className="user__given-name">{user.given_name}</h2>
          <h2 className="user__family-name">{user.family_name}</h2>
          <p className="user__user-id">{user.sub}</p>
          <p className="user__email">{user.email}</p>
          {/* <img src={user.picture} alt="user" /> */}
        </div>
      )}
    </div>
  );
};

const UserFirstName = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {user !== undefined && isAuthenticated && (
        <div className="user__given-name">{user.given_name}</div>
      )}
    </>
  );
};

const UserLastName = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {user !== undefined && isAuthenticated && (
        <p className="user__family-name">{user.family_name}</p>
      )}
    </>
  );
};

const UserEmail = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {user !== undefined && isAuthenticated && (
        <p className="user__email">{user.email}</p>
      )}
    </>
  );
};

// const UserId = () => {
//   const { user, isAuthenticated } = useAuth0();
//   const userId: string = (user !== undefined &&
//     isAuthenticated &&
//     user.sub);

//   return userId;
// };

// const userIdString: string = UserId();
const userIdString: string = "";

export default Profile;
export { UserFirstName, UserLastName, UserEmail, userIdString };
