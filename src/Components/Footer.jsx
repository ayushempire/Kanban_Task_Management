import React from "react";
import kmslogo from "../kmslogo.svg";

export default function Footer() {
  return (
    <div>
      <footer class="d-flex bg-dark flex-wrap justify-content-start align-items-center py-3 px-3 border-top">
        <p class="col-md-4 mb-0 text-white fs-5">© 2023 KMS, Limited</p>

        <a
          href="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img class="bi me-2" src={kmslogo} width="170" height="50"></img>
        </a>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-white fw-bold">
              Privacy Pilicy
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-white fw-bold">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-white fw-bold">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-white fw-bold">
              Contact us
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-white fw-bold">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
