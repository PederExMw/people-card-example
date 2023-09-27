import React, { useState } from "react";
import PropTypes from "prop-types";
import userArray from "../libs/user";
import "./cardcss.css";

function Uyeler({ user, visible, setVisible }) {
  const { name, department, age, id } = user;
  // const [count, setCount] = useState(0);

  const openCard = (id) => {
    id === visible ? setVisible(0) : setVisible(id);
  };

  const deletUser = (idToRemove) => {};

  return (
    <div>
      <div className="col-md-8 mb-3 ">
        <div className="card">
          <div
            onClick={() => openCard(user.id)}
            className="card-header d-flex justify-content-center"
          >
            <h4 className="d-inline"> {name} </h4>
          </div>

          <div
            className={` ${
              visible === user.id ? "collapseOpen" : "collapseClose"
            } `}
          >
            <div className="card-text cardOp2"> Departman : {department} </div>
            <div className="card-text cardOp3"> Yaş : {age} </div>
            {/* <p>Tıkladınığınız sayı : {count}</p> */}
            <button className="btn2" onClick={() => deletUser(id)}>
              Tıklayın
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uyeler;
