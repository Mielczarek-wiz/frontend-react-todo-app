import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    
    const [active, setActive] = useState<number>(1);
    
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