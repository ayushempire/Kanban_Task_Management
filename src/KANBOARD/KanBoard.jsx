import React, { useState } from "react";
import BoardNav from "./BoardNav";
import Column from "./Column";

// import { useMouseSensor }  "react-beautiful-dnd";

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

  // //  ! const for dragable
  // const [target, settarget] = useState({
  //   cid: "",
  //   bid: "",
  // });

  // useEffect(() => {
  //   let init;
  //   if (localStorage.getItem("board") === null) {
  //     init = [];
  //   } else {
  //     init = JSON.parse(localStorage.getItem("board"));
  //     console.log(init);
  //     setcolumn(init);
  //     console.log(column);
  //   }
  // }, []);

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
    if (bindex < 0) {
      return;
    }

    console.log(bindex);
    const cindex = column[bindex].cards?.findIndex((item) => item.id === cid);
    if (cindex < 0) {
      console.log("hello");
    }

    const tempColumn = [...column];
    tempColumn[bindex].cards.splice(cindex, 1);
    setcolumn(tempColumn);
  };

  // // todo: function for dragable

  // const handleDragEnd = (cid, bid) => {
  //   let s_bindex = column.findIndex((item) => item.id === bid);
  //   if (s_bindex < 0) return;

  //   let s_cindex = column[s_bindex].cards?.findIndex((item) => item.id === cid);
  //   if (s_cindex < 0) return;

  //   let t_bindex = column.findIndex((item) => item.id === target.bid);
  //   if (t_bindex < 0) return;

  //   let t_cindex = column[t_bindex].cards?.findIndex(
  //     (item) => item.id === target.cid
  //   );
  //   if (t_cindex < 0) return;

  //   const tempcolumn = [...column];

  //   const tempCard = tempcolumn[s_bindex].cards[s_cindex];

  //   tempcolumn[s_bindex].cards?.slice(s_cindex, 1);
  //   setcolumn(tempcolumn);

  //   tempcolumn[t_bindex].cards?.splice(t_cindex, 0, tempCard);

  //   setcolumn(tempcolumn);
  // };

  // const handleDragEnter = (cid, bid) => {
  //   settarget({
  //     cid: cid,
  //     bid: bid,
  //   });
  // };

  // useEffect(() => {
  //   localStorage.setItem("board", JSON.stringify(column));
  // }, [column]);

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
              // handleDragEnter={handleDragEnter}
              // handleDragEnd={handleDragEnd}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
