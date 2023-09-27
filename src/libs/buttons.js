import React from "react";
import userArray from "./user";

function Buttons({ filterItems, filterItems2, setItems }) {
  return (
    <div className="d-flex justify-content-center mb-3">
      {filterItems.map((val) => (
        <button
          id="d"
          onClick={() => filterItems2(val)}
          className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
        >
          {val}
        </button>
      ))}
      <button
        id="d2"
        onClick={() => setItems(userArray)}
        className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
      >
        Herkes
      </button>
    </div>
  );
}

export default Buttons;
