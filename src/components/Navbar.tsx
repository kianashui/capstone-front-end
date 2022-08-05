import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
// import { Logout } from "./LogoutButton";
import "./Navbar.css";

const handleClick = (event: any) => {
  // event.preventDefault();
  if (event.target.innerText === "Logout") {
    // log out logic if logout is clicked
    // Logout();
  }
};

const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    // onClick: {doNothing},
    cName: "nav-text",
  },
  {
    title: "Trips",
    path: "/trips",
    icon: <RiIcons.RiPlaneFill />,
    // onClick: {doNothing},
    cName: "nav-text",
  },
  {
    title: "Account Settings",
    path: "/settings",
    icon: <RiIcons.RiUserSettingsFill />,
    // onClick: {doNothing},
    cName: "nav-text",
  },
  {
    title: "More",
    path: "/more",
    icon: <RiIcons.RiMoreFill />,
    // onClick: {doNothing},
    cName: "nav-text",
  },
  // {
  //   title: "Logout",
  //   path: "/",
  //   icon: <RiIcons.RiLogoutBoxLine />,
  //   // onClick: { Logout },
  //   cName: "nav-text",
  // },
];

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <IconContext.Provider value={{ className: "icons" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineMenu onClick={showSidebar} />
          </Link>
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
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={handleClick}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
