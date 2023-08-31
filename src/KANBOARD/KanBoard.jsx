import React from "react";
import BoardNav from "./BoardNav";
import Column from "./Column";

export default function KanBoard() {
  return (
    <div
      className=" mtauto Kanboard w-auto height-100 d-flex flex-column"
      style={{ width: "100%", height: "100vh" }}
    >
      <BoardNav />
      <div
        className="App_boards_outer mtauto d-flex  flex-fill justify-content-center"
        style={{
          overflowX: "auto",
          width: "100%",
          overflowY: "auto",
          height: "100%",
        }}
      >
        <div
          className="App_boards d-flex flex-column flex-md-row flex-lg-row gap-4 p-3 "
          style={{ minWidth: "min-content", height: "min-content" }}
        >
          <Column />
          <Column />
          <Column />
        </div>
      </div>
    </div>
  );
}
