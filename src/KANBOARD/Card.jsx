import React from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";

export default function Card(props) {
  let a = new Date();
  let date = `${a.getDate()}/${a.getMonth()}/${a.getFullYear()}`;

  return (
    <div className="card p-2">
      <div className="card_top d-flex align-items-center my-3">
        <div className="card_lable me-auto d-flex flex-row gap-1 fs-2 fw-bold">
          {props.card?.card_title}
        </div>
        <MoreHorizontal />
      </div>
      <div className="task_titel p-2">{props.card?.desc}</div>
      <div className="bottom d-flex flex-row align-items-center mt-3">
        <div className="date me-auto">
          <Clock /> {date}
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
