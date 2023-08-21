import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import { useNavigate } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo">
        <h1>ARMFILMS</h1>
      </div>
      <div className="navig">
        <nav>
          <ul>
            <li>
              <Link to="/homeFilms" className="xxx">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="xxx">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="xxx">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="xxx">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sign">
        <button className="white" onClick={() => navigate("/")}>
          LOG IN
        </button>
        <button className="red" onClick={() => navigate("/signin")}>
          SIGN UP
        </button>
      </div>
    </div>
  );
}
