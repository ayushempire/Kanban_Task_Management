import React, { useState } from "react";
import { styled } from "styled-components";
import { MoreHorizontal, PlusCircle } from "react-feather";
import "./Column.css";
import Card from "./Card";

export default function Column() {
  const [addCard, setaddCard] = useState(false);
  const addnewCard = () => {
    setaddCard(true);
  };

  var id = Date.now;

  const [saveCard, setsaveCard] = useState([]);

  const [newCard, setnewCard] = useState({
    id: id,
    title: "",
    description: "",
  });

  const createCard = () => {
    if (!newCard.title || !newCard.description) {
      alert("enter title and desciption");
    }

    if (newCard.title && newCard.description) {
      const data = {
        email: localStorage.getItem("user"),
        title: newCard.title,
        description: newCard.description,
      };
      console.log(data);
      setsaveCard([...saveCard, data]);
      console.log(saveCard);
      localStorage.setItem("task", JSON.stringify(saveCard));
      setaddCard(false);
    }
  };

  return (
    <div
      className="Column_main d-flex flex-column gap-2"
      style={{ width: "300px", minWidth: "min-content" }}
    >
      <div className="Column_top d-flex" style={{ zIndex: 1 }}>
        <div className="Column_title fw-bold flex-fill ">
          To do <span style={{ color: "grey" }}> 2</span>
        </div>
        <button type="button" className="btn border-0" onClick={addnewCard}>
          <PlusCircle />
        </button>
      </div>
      <div
        className="ColunCard bg-light d-flex flex-row flex-md-column flex-lg-column p-1  gap-2 border-2 border-bottom"
        style={{
          height: "75vh",
          overflowY: "auto",
        }}
      >
        {addCard ? (
          <div
            className="modal-content rounded-4 shadow p-3 "
            style={{ width: "fit-content" }}
          >
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5 border-0  ">
                <input
                  type="text"
                  placeholder="Title"
                  className="w-75"
                  name="header"
                  value={setnewCard.title}
                  onChange={(e) => {
                    setnewCard({ ...newCard, title: e.target.value });
                  }}
                />
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => setaddCard(false)}
              ></button>
            </div>
            <div className="modal-body py-2 w-100 h-100">
              <input
                type="text"
                placeholder="description"
                className="pb-5"
                name="description"
                value={setnewCard.description}
                onChange={(e) => {
                  setnewCard({ ...newCard, description: e.target.value });
                }}
              />
            </div>
            <div className="modal-footer flex-column align-items-stretch w-100 h-25 gap-2 pb-2 border-top-0">
              <button
                type="button"
                className="btn btn-lg btn-primary p-1 "
                onClick={createCard}
              >
                Save changes
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <Card />
        <Card />
        <Card />
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
