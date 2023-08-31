import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import kmslogo from "../kmslogo.svg";

export default function BoardNav() {
  return (
    <Navbar>
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex ">
          <Link className=" py-2 ">
            <img src={kmslogo} width="180" height="45" />
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
            <div className="align-content-center d-flex align-items-center ms-auto">
              <button
                className="btn btn-outline-warning bg-warning text-dark fw-bold border-dark "
                type="button"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

const Navbar = styled.div`
  width: 100%;
  padding: 1%;
  border-bottom: 0.11rem solid lightgrey;
`;
