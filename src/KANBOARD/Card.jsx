import React from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from "./Chip";

export default function Card() {
  return (
    <div className="card p-2">
      <div className="card_top d-flex align-items-center my-3">
        <div className="card_lable me-auto d-flex flex-row gap-1">
          <Chip title="Urgent" color="red" />
          <Chip close title="Urgent" color="red" />
        </div>
        <MoreHorizontal />
      </div>
      <div className="task_titel p-2 fs-4 fw-bold">Hello World</div>
      <div className="bottom d-flex flex-row align-items-center mt-3">
        <div className="date me-auto">
          <Clock />
          23 august
        </div>
        <div
          className="progress_task d-flex"
          //   style={{ height: "1.4rem" }}
        >
          <CheckSquare />
          <p>1/4</p>
        </div>
      </div>
    </div>
  );
}
