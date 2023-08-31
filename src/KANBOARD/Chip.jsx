import React from "react";
import { X } from "react-feather";

export default function Chip(props) {
  return (
    <div
      className="chip d-flex rounded-5 px-3 py-2 text-white align-items-center gap-1 m-1 bg-secondary "
      style={{
        backgroundColor: props.color,
        width: "fit-content",
        cursor: "pointer",
      }}
    >
      {props.title}
      {props.close && <X style={{ width: "15px", height: "15px" }} />}
    </div>
  );
}
