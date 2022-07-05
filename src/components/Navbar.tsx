import React, { useState } from 'react';
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import "./Navbar.css";

const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Trips",
    path: "/trips",
    icon: <RiIcons.RiPlaneFill />,
    cName: "nav-text",
  },
  {
    title: "Account Settings",
    path: "/settings",
    icon: <RiIcons.RiUserSettingsFill />,
    cName: "nav-text",
  },
  {
    title: "More",
    path: "/more",
    icon: <RiIcons.RiMoreFill />,
    cName: "nav-text",
  },
];

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ className: "icons" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
        <AiIcons.AiOutlineMenu onClick={showSidebar} />
        </Link>
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
              <Link to={item.path}>
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