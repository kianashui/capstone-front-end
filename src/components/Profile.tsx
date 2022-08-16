const Profile = (props: any) => {
  return (
    <div>
      {props.user !== undefined && (
        <div>
          <div className="user__given-name">
            First Name: <UserFirstName user={props.user} />
          </div>
          <div className="user__family-name">
            Last Name: <UserLastName user={props.user} />
          </div>
          <div className="user__email">
            Email: <UserEmail user={props.user} />
          </div>
        </div>
      )}
    </div>
  );
};

const UserFirstName = (props: any) => {
  return (
    <>
      {props.user !== undefined && (
        <p className="user__first-name">{props.user.given_name}</p>
      )}
    </>
  );
};

const UserLastName = (props: any) => {
  return (
    <>
      {props.user !== undefined && (
        <p className="user__last-name">{props.user.family_name}</p>
      )}
    </>
  );
};

const UserEmail = (props: any) => {
  return (
    <>
      {props.user !== undefined && (
        <p className="user__email">{props.user.email}</p>
      )}
    </>
  );
};

export default Profile;
export { UserFirstName, UserLastName, UserEmail };
