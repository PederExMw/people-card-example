import React, { useState } from "react";
import "./App.css";
import Uyeler from "./components/Isim";
import ItemOne from "./components/FirstPay/FirstPay";
import ChangeColor from "./components/changeColor/ChangeColor";
import ChangeColorNew from "./components/changeColor/ChangeColorNew";
import ReactDOM from "react-dom";
import userArray from "./libs/user";
import Buttons from "./libs/buttons";

function App() {
  const [visible, setVisible] = useState(0);
  const [item, setItems] = useState(userArray);
  const filterItems = [...new Set(userArray.map((val) => val.gender))];

  const filterItems2 = (cat) => {
    const newItems = userArray.filter((newval) => newval.gender === cat);
    setItems(newItems);
  };
  return (
    <div className="App">
      <Buttons
        filterItems={filterItems}
        filterItems2={filterItems2}
        setItems={setItems}
      />
      {/* filtre kadın erkek herkes */}
      {item.map((user) => (
        <Uyeler
          visible={visible}
          setVisible={setVisible}
          user={user}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default App;
