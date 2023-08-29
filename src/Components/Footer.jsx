import React from "react";
import kmslogo from "../kmslogo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="d-flex bg-dark flex-column flex-md-column flex-lg-row justify-content-start align-items-center py-3 px-1 px-md-3 px-lg-3 border-top">
        <p className="col-md-4 mb-1 text-white fs-5">© 2023 KMS, Limited</p>

        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-0 link-body-emphasis text-decoration-none"
        >
          <img className="bi me-2" src={kmslogo} width="170" height="50"></img>
        </Link>

        <ul className="nav col-md-4 justify-content-center justify-content-md-end justify-content-lg-end">
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-white fw-bold">
              Privacy Pilicy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-white fw-bold">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-white fw-bold">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-white fw-bold">
              Contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-white fw-bold">
              About
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
