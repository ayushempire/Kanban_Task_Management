import React from "react";
import styled from "styled-components";
import BoardNav from "./BoardNav";
import Column from "./Column";

export default function KanBoard() {
  return (
    <Kanboard>
      <BoardNav />
      <App_outer>
        <App_boards>
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </App_boards>
      </App_outer>
    </Kanboard>
  );
}

const Kanboard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App_boards = styled.div`
  min-width: min-content;
  display: flex;
  padding-left: 2rem;
  padding-top: 2rem;
  gap: 30px;
`;

const App_outer = styled.div`
  flex: 1;
  width: 100%;
  overflow-x: auto;
`;
