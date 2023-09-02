import React, { useState } from "react";

export default function Editable(props) {
  const [newCard, setnewCard] = useState({
    title: "",
    description: "",
  });

  const cCard = () => {
    props.createCard(newCard.title, newCard.description);
  };

  return (
    <div>
      <div
        className="modal-content rounded-4 shadow p-3 "
        style={{ width: "fit-content" }}
      >
        <div className="modal-header border-0">
          <h1 className="modal-title fs-5 border-0  ">
            <input
              type="text"
              autoFocus
              placeholder="Title"
              className="w-75"
              name="header"
              value={setnewCard.title}
              onChange={(e) => {
                setnewCard({ ...newCard, title: e.target.value });
              }}
            >
              {/*  */}
            </input>
          </h1>
          <button
            type="button"
            className="btn-close"
            onClick={() => props.setaddCard(false)}
          ></button>
        </div>
        <div className="modal-body py-2 w-100 h-100">
          <textarea
            type="text"
            placeholder="description"
            className="pb-5 w-100 custom-scroll"
            name="description"
            value={setnewCard.description}
            onChange={(e) => {
              setnewCard({ ...newCard, description: e.target.value });
            }}
          >
            {/* {props.description} */}
          </textarea>
        </div>
        <div className="modal-footer flex-column align-items-stretch w-100 h-25 gap-2 pb-2 border-top-0">
          <button
            type="button"
            className="btn btn-lg btn-primary p-1 "
            // onClick={() => props.addnewCard(newCard, props.column?.id)}
            onClick={cCard}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
