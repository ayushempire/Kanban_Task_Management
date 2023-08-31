import React from "react";
import { MoreHorizontal } from "react-feather";
import Chip from "./Chip";

export default function Card() {
  return (
    <div className="card p-2">
      <div className="card_top d-flex align-items-center">
        <div className="card_lable me-auto d-flex flex-row gap-1">
          <Chip title="Urgent" color="red" />
          <Chip close title="Urgent" color="red" />
        </div>
        <MoreHorizontal />
      </div>
    </div>
  );
}
