import React from "react";
import { styled } from "styled-components";
import { MoreHorizontal } from "react-feather";
import "./Column.css";
import Card from "./Card";

export default function Column() {
  return (
    <div
      className="Column_main d-flex flex-column gap-2"
      style={{ width: 290, minWidth: "min-content" }}
    >
      <div className="Column_top d-flex">
        <div className="Column_title fw-bold flex-fill ">
          To do <span style={{ color: "grey" }}> 2</span>
        </div>
        <MoreHorizontal />
      </div>
      <div
        className="ColunCard bg-light d-flex flex-row flex-md-column flex-lg-column p-1  gap-2 border-2 border-bottom"
        style={{
          height: "75vh",
          overflowY: "auto",
        }}
      >
        <Card />
      </div>
    </div>
  );
}

// const Column_main = styled.div`
//   width: 350px;
//   display: flex;
//   margin-bottom: 0.5rem;
//   flex-direction: column;
//   gap: 0.2rem;
//   max-height: 100%;
//   overflow-y: auto;
// `;
// const Column_top = styled.div`
//   display: flex;
// `;
// const Column_title = styled.p`
//   flex: 1;
//   align-items: center;
//   font-weight: bold;
// `;
// const Card = styled.div`
//   background-color: #f8f8f8;
// `;

const H1 = styled.h1`
  margin-right: 10px;
`;
