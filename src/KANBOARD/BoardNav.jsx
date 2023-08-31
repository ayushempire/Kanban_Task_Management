import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import kmslogo from "../kmslogo.svg";

export default function BoardNav() {
  return (
    <Navbar>
      <div className="container-fluid">
        <Link className="ps-1 py-2">
          <img src={kmslogo} width="180" height="45" />
        </Link>
      </div>
    </Navbar>
  );
}

const Navbar = styled.div`
  width: 100%;
  padding: 1%;
  border-bottom: 0.11rem solid lightgrey;
`;
