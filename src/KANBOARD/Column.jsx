import React from "react";
import { styled } from "styled-components";
import { MoreHorizontal } from "react-feather";

export default function Column() {
  return (
    <Column_main>
      <Column_top>
        <Column_title>
          To do <span style={{ color: "grey" }}> 2</span>
        </Column_title>
        <MoreHorizontal />
      </Column_top>
      <Card>
        <h1>Card</h1>
        <h1>Card</h1>
      </Card>
    </Column_main>
  );
}

const Column_main = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 100%;
  overflow-y: auto;
`;
const Column_top = styled.div`
  display: flex;
`;
const Column_title = styled.p`
  flex: 1;
  align-items: center;
  font-weight: bold;
`;
const Card = styled.div`
  background-color: #f8f8f8;
`;
