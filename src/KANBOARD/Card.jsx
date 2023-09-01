import React from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";

export default function Card() {
  return (
    <div className="card p-2">
      <div className="card_top d-flex align-items-center my-3">
        <div className="card_lable me-auto d-flex flex-row gap-1 fs-2 fw-bold">
          Card Title
        </div>
        <MoreHorizontal />
      </div>
      <div className="task_titel p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ea
        reprehenderit earum deleniti tempore, quidem unde possimus quis error
        eum in fuga rerum?
      </div>
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
