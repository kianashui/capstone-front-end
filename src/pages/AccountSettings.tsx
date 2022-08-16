import Profile from "../components/Profile";
import "./AccountSettings.css";

function AccountSettings(props: any) {
  return (
    <div className="account-settings">
      <h1>Account Settings</h1>
      <Profile user={props.user} />
      {props.loadingCallback()}
    </div>
  );
}

export default AccountSettings;
