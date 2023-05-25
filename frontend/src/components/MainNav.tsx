import { NavLink } from "react-router-dom";

import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
