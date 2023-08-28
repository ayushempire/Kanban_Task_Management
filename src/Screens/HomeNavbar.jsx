import React from "react";

export default function HomeNavbar() {
  return (
    <>
      <div>
        <nav className="navbar d-flex" style={{ backgroundColor: "lightblue" }}>
          <div className="container-fluid">
            <a
              className="navbar-brand text-success fs-1"
              href="#"
              style={{ fontFamily: "Anton,sans-serif" }}
            >
              <img
                src=""
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />{" "}
              KMS
            </a>
            <div>
              <button class="btn text-success fw-bold bg-white" type="button">
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
