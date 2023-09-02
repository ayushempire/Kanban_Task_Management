import React, { useState } from "react";
import { styled } from "styled-components";
import { MoreHorizontal, PlusCircle } from "react-feather";
import "./Column.css";
import Card from "./Card";
import Editable from "./Editable";

export default function Column(props) {
  const [addCard, setaddCard] = useState(false);
  const addnewCard = () => {
    setaddCard(true);
  };

  const [saveCard, setsaveCard] = useState([]);

  const createCard = (title, desc) => {
    const data = {
      title: title,
      description: desc,
    };
    console.log(data);
    setsaveCard([...saveCard, data]);
    console.log(saveCard);
    localStorage.setItem("task", JSON.stringify(saveCard));
    props.addNewCard(data.title, data.description, props.column?.id);
    setaddCard(false);
  };

  return (
    <div
      className="Column_main d-flex flex-column gap-2 "
      style={{ width: "300px", minWidth: "min-content" }}
    >
      <div className="Column_top d-flex" style={{ zIndex: 1 }}>
        <div className="Column_title fw-bold flex-fill ">
          {props.column?.column_title}
          <span style={{ color: "grey" }}> {props.column?.cards?.length}</span>
        </div>
        <button type="button" className="btn border-0" onClick={addnewCard}>
          <PlusCircle />
        </button>
      </div>
      <div
        className="ColunCard bg-light d-flex flex-row flex-md-column flex-lg-column p-1  gap-2 border-2 border-bottom custom-scroll"
        style={{
          height: "75vh",
          overflowY: "auto",
        }}
      >
        {addCard || props.column?.cards?.length === 0 ? (
          <Editable
            setnewCard={setaddCard}
            setaddCard={setaddCard}
            createCard={createCard}
          />
        ) : (
          ""
        )}
        {props.column?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            removeCard={props.removeCard}
            column_id={props.column_id}
            setnewCard={setaddCard}
            setaddCard={setaddCard}
            createCard={createCard}
          />
        ))}
      </div>
    </div>
  );
}

// const Column_main = styled.div`
//   width: 350px;
//   display: flex;
//   margin-bottom: 0.5rem;
//   flex-direction: column;
//   gap: 0.2rem;
//   max-height: 100%;
//   overflow-y: auto;
// `;
// const Column_top = styled.div`
//   display: flex;
// `;
// const Column_title = styled.p`
//   flex: 1;
//   align-items: center;
//   font-weight: bold;
// `;
// const Card = styled.div`
//   background-color: #f8f8f8;
// `;

const H1 = styled.h1`
  margin-right: 10px;
`;
