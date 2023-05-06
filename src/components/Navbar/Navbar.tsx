import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Navbar of the app
export const Navbar = () => {

    // Location used to correctly set the tab.
    const location = useLocation();

    // State which handles the active tab.
    const [active, setActive] = useState<number>(1);

    // Using useEffect hook for checking which tab has to be set to active.
    useEffect(() => {
      if(location.pathname === "/") {
        setActive(1);
      } else if (location.pathname === "/done") {
        setActive(2);
      } else {
        setActive(3);
      }
    }, [])


    
    // Navbar sticked to the top. Every tab has class which is in color #eee if is not active and in color white when it is active. 
    // Moreover links has function which changes the active tab after clicking on it.
    return (
        <nav className="navbar navbar-fixed-top">
          <ul className="nav nav-tabs">
            <li className={active === 1 ? "nav-item active" : "nav-item"} >
              <Link to="/" onClick={() => setActive(1)}>All</Link>
            </li>
            <li className={active === 2 ? "nav-item active" : "nav-item"}>
              <Link to="/done" onClick={() => setActive(2)}>Done</Link>
            </li>
            <li className={active === 3 ? "nav-item active" : "nav-item"}>
              <Link to="/active" onClick={() => setActive(3)}>Active</Link>
            </li>
          </ul>
        </nav>
    )
}