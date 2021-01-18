import React, { useContext } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { UserContext } from "../../data-requests/usercontext";

export default function MenuButton({ menu, ToggleMenu, navRef }) {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const matchHome = useRouteMatch("/home");
  const matchUser = useRouteMatch(`/profile/${user.username}`);
  const Logout = () => {
    history.push("/");
    localStorage.removeItem("user");
    setUser({});
  };

  return (
    <span ref={navRef} className="Nav-mb-menu">
      {matchHome ? (
        <Link to="/login">
          <h4>SIGN IN</h4>
        </Link>
      ) : matchUser ? (
        <h4 onClick={Logout}>SIGN OUT</h4>
      ) : null}
      {menu ? (
        <i onClick={ToggleMenu} className="fa fa-times" aria-hidden="true"></i>
      ) : (
        <i onClick={ToggleMenu} className="fa fa-bars" aria-hidden="true"></i>
      )}
    </span>
  );
}
