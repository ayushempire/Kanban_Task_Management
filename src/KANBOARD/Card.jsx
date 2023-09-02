import React, { useState } from "react";
import { Clock, Delete, Edit } from "react-feather";
// import Editable from "./Editable

export default function Card(props) {
  const [flag, setflag] = useState(false);

  const removetheCard = () => {
    props.removeCard(props.card?.id, props.column_id);
  };

  let a = new Date();
  let date = `${a.getDate()}/${a.getMonth()}/${a.getFullYear()}`;

  return (
    <>
      <div className="card p-2">
        <div className="card_top d-flex align-items-center my-3">
          <div className="card_lable me-auto d-flex flex-row gap-1 fs-2 fw-bold">
            {props.card?.card_title}
          </div>

          <button className="btn border-0" onClick={removetheCard}>
            <Delete />
          </button>
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
            <button
              className=" btn border-0"
              type="button"
              onClick={() => setflag(true)}
            >
              <Edit />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
