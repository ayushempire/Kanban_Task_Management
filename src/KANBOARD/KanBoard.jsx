import React, { useState } from "react";
import BoardNav from "./BoardNav";
import Column from "./Column";

export default function KanBoard() {
  // state for columns
  const [column, setcolumn] = useState([
    {
      id: 1,
      column_title: "To do",

      cards: [
        // {
        //   // card_id: Date.now() + Math.random() * 4,
        //   // card_title: "",
        //   // desc: "",
        //   // date: "",
        // },
      ],
    },
    {
      id: 2,
      column_title: "Doing",
      cards: [
        // {
        //   card_id: Date.now() + Math.random() * 4,
        //   card_title: "",
        //   desc: "",
        //   date: "",
        // },
      ],
    },
    {
      id: 3,
      column_title: "Done",
      cards: [
        // {
        //   card_id: Date.now() + Math.random() * 4,
        //   card_title: "",
        //   desc: "",
        //   date: "",
        // },
      ],
    },
  ]);

  const addNewCard = (title, desc, bid) => {
    const card = {
      id: Date.now() + Math.random(),
      card_title: title,
      date: "",
      desc: desc,
    };

    const index = column.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempColumn = [...column];
    tempColumn[index].cards.push(card);
    setcolumn(tempColumn);
  };

  const removeCard = (cid, bid) => {
    const bindex = column.findIndex((item) => item.id === bid);
    if (bindex < 0) return;

    const cindex = column[bindex].cards.findIndex(
      (item) => item.card_id === cid
    );
    if (cindex < 0) return;

    const tempColumn = [...column];
    tempColumn[bindex].cards.splice(cindex, 1);
    setcolumn(tempColumn);
  };

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
            <Column
              key={item.id}
              column={item}
              column_id={item.id}
              addNewCard={addNewCard}
              removeCard={removeCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
