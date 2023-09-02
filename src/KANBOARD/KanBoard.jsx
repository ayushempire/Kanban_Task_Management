import React, { useState } from "react";
import BoardNav from "./BoardNav";
import Column from "./Column";

export default function KanBoard() {
  // state for columns
  const [column, setcolumn] = useState([
    {
      id: Date.now() + Math.random() * 2,
      column_title: "To do",
      tsks: [],
      cards: [
        {
          card_id: Date.now() + Math.random() * 4,
          card_title: "card1",
          desc: "kanban app",
          date: "",
        },
      ],
    },
  ]);

  return (
    <div
      className=" mtauto Kanboard w-auto height-100 d-flex flex-column"
      style={{ width: "100%", height: "100vh" }}
    >
      <BoardNav />
      <div
        className="App_boards_outer mtauto d-flex  flex-fill "
        style={{
          overflowX: "auto",
          width: "100%",
        }}
      >
        <div
          className="App_boards d-flex flex-column flex-md-row flex-lg-row gap-5 p-3 ms-5 "
          style={{ minWidth: "min-content", height: "min-content" }}
        >
          {column.map((item) => (
            <Column key={item.id} column={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
