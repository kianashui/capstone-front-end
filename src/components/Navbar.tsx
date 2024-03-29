import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { UserFirstName } from "./Profile";
import "./Navbar.css";

function Navbar(props: any) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { isAuthenticated } = useAuth0();
  const sidebarData = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text",
      loggedIn: true,
    },
    {
      title: "Trips",
      path: "/trips",
      icon: <RiIcons.RiPlaneFill />,
      cName: "nav-text",
      loggedIn: isAuthenticated,
    },
    {
      title: "Account Settings",
      path: "/settings",
      icon: <RiIcons.RiUserSettingsFill />,
      cName: "nav-text",
      loggedIn: isAuthenticated,
    },
    {
      title: "More",
      path: "/more",
      icon: <RiIcons.RiMoreFill />,
      cName: "nav-text",
      loggedIn: isAuthenticated,
    },
    {
      title: "Logout",
      path: "/logout",
      icon: <RiIcons.RiLogoutBoxLine />,
      cName: "nav-text",
      loggedIn: isAuthenticated,
    },
  ];

  return (
    <div>
      <IconContext.Provider value={{ className: "icons" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineMenu onClick={showSidebar} />
          </Link>
          {isAuthenticated ? (
            <div className="navbar-user-greeting">
              Welcome, <UserFirstName user={props.user} />
            </div>
          ) : (
            <></>
          )}
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              if (item.loggedIn) {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              } else {
                return <></>;
              }
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
