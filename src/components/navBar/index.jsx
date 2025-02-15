import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PROJECTS",
    to: "/projects",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to={"/"} className="navbar__container__logo">
          <FaReact size={30} />
        </NavLink>
      </div>
      <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
        {data.map((item, key) => (
          <li key={key} className="navbar__container__menu__item">
            <NavLink
              className="navbar__container__menu__item__links"
              activeClassName="active-link" // Optional: Add a class for active link
              to={item.to}
              onClick={handleToggleIcon} // Close menu on click (optional)
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="nav-icon" onClick={handleToggleIcon}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
