import React from "react";
import { Link, useNavigate } from "react-router-dom";
import kmslogo from "../kmslogo.svg";
export default function HomeNavbar() {
  //for navigation
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="#">
            <img src={kmslogo} width="250" height="80" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse position-relative "
            id="navbarSupportedContent"
          >
            <div className="me-auto"></div>
            <div>
              <button
                className="btn btn-outline-dark text-warning bg-white fw-bold"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
