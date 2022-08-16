import { useEffect } from "react";
import Profile from "../components/Profile";

function AccountSettings(props: any) {
  useEffect(props.loadingCallback, []);
  return (
    <div className="account-settings">
      <h1>Account Settings</h1>
      <Profile user={props.user} />
    </div>
  );
}

export default AccountSettings;
