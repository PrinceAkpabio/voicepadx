import React, { useContext } from "react";
import { MenuItems, LogoItem } from "./menuItems";
import { UserContext } from "../../data-requests/usercontext";

import { Link as NavLink, useRouteMatch, useHistory } from "react-router-dom";

export const Logo = () => (
  <NavLink id="Nav-logo" to="/">
    <span
      style={{
        backgroundImage: `url(${LogoItem.logo})`,
      }}
      id="Nav-logo1"
    ></span>
  </NavLink>
);

export default function MenuList({ menu }) {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const matchUser = useRouteMatch(`/profile/${user.username}`);
  const Logout = () => {
    history.push("/");
    localStorage.removeItem("user");
    setUser({});
  };
  return (
    <div className={`Nav-menu-wrapper ${menu && "active"}`}>
      <ul className="Nav-menu">
        {MenuItems.map((Menu, idx) => (
          <li
            className={`Nav-menu-items ${menu && "active"}`}
            key={idx}
            id={`${!matchUser ? Menu.ido : matchUser ? Menu.idi : ""}`}
            onClick={matchUser && Logout}
          >
            <NavLink className="menu-links" to={Menu.link}>
              {Menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
