import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  // page navigator
  const navigate = useNavigate();

  // handle signup funcion
  const handleSignup = () => {
    navigate("/Login");
  };

  return (
    <div
      className=" homePage d-flex flex-column flex-md-column flex-lg-row"
      style={{ minHeight: "80vh" }}
    >
      <div
        className=" container text-white pt-5 me-5 ps-lg-5"
        style={{ zIndex: 2 }}
      >
        <h1 className="ms-lg-4" style={{ fontSize: "45px" }}>
          KMS makes it easier for peoples to manage projects and tasks
        </h1>
        <p className="pt-4 fs-3 ms-lg-4">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who’s doing what and what needs to get
          done
        </p>
        <h5 className="pt-4 ms-lg-4">WHAT YOU GET ON THE FREE PLAN:</h5>
        <ul className="fs-5 mt-3 ms-lg-5">
          <li>Unlimited cards</li>
          <li>Unlimited Power-Ups per board</li>
        </ul>
      </div>
      <div className="container pt-5  ms-lg-5 mb-5 mb-lg-0">
        <form
          className="d-flex flex-column flex-md-column flex-lg-column rd"
          onSubmit={handleSignup}
        >
          <input
            className="mt-2 mb-3 ps-2 "
            type="search"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            style={{ width: "100px" }}
          >
            sign up
          </button>
        </form>
      </div>
    </div>
  );
}
