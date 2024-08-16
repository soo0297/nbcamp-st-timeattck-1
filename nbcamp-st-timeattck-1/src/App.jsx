import React, { useState } from "react";
import "./App.css";

const App = () => {
  const titleStyle = {
    color: "blue",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  };

  const [countries, setCountries] = useState([]);

  const [name, setName] = useState("");
  const [gold, setGold] = useState("0");
  const [silver, setSilver] = useState("0");
  const [bronze, setBronze] = useState("0");

  const inputNameHandler = (e) => {
    setName(e.target.value);
  };

  const inputGoldHandler = (e) => {
    setGold(e.target.value);
  };

  const inputSilverHandler = (e) => {
    setSilver(e.target.value);
  };

  const inputBronzeHandler = (e) => {
    setBronze(e.target.value);
  };

  return (
    <div>
      <h1 style={titleStyle}>2024 파리 올림픽 매달 트래커</h1>
      <form className="formGroup">
        <div className="inputGroup">
          <label>국가명</label>
          <input type="text" onChange={inputNameHandler} />
        </div>
        <div className="inputGroup">
          <label>금메달</label>
          <input type="text" onChange={inputGoldHandler} />
        </div>
        <div className="inputGroup">
          <label>은메달</label>
          <input type="text" onChange={inputSilverHandler} />
        </div>
        <div className="inputGroup">
          <label>동메달</label>
          <input type="text" onChange={inputBronzeHandler} />
        </div>
        <div className="buttonGroup">
          <button type="button">추가하기</button>
          <button type="button">업데이트</button>
        </div>
      </form>
      <table className="medalListTable">
        <thead className="medalListHead">
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody className="medalListBody">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
