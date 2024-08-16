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

  // 등록된 리스트에 있는 국가명과 입력한 국가명이 일치하는지 확인하는 함수
  const nameExistance = countries.find((item) => {
    if (item.name === name) {
      return true;
    } else {
      return false;
    }
  });

  const handleAddCountry = (e) => {
    e.preventDefault();

    if (!name) {
      alert("국가명을 입력해주세요");
      return;
    }

    //국가가 존재하면 이미 등록되어 있다고 알려주고, 아니면 새로운 배열 추가 / 정렬
    if (nameExistance) {
      alert("이미 등록된 국가입니다.");
    } else {
      const newCountries = {
        id: new Date().getTime(),
        name: name,
        gold: gold,
        silver: silver,
        bronze: bronze,
      };
      setCountries(
        [...countries, newCountries].sort((a, b) => b.gold - a.gold)
      );
    }
    setName("");
    setGold("0");
    setSilver("0");
    setBronze("0");
  };

  //업데이트..find
  const handleUpdateCountry = (e) => {
    e.preventDefault();

    if (!nameExistance) {
      alert("등록되지 않은 국가입니다.");
      return;
    }
    setCountries(
      countries
        .map((item) => {
          if (item.name === name) {
            return {
              id: new Date().getTime(),
              name: item.name,
              gold: gold,
              silver: silver,
              bronze: bronze,
            };
          } else {
            return item;
          }
        })
        .sort((a, b) => b.gold - a.gold)
    );
    setName("");
    setGold("0");
    setSilver("0");
    setBronze("0");
  };

  const handleDeleteCountry = (id) => {
    const deleteConfirm = confirm("정말로 삭제하시겠습니까?");
    if (!deleteConfirm) {
      return;
    }
    const deleteCountries = countries.filter((countries) => {
      return countries.id !== id;
    });
    setCountries(deleteCountries);
  };

  return (
    <div>
      <h1 style={titleStyle}>2024 파리 올림픽 매달 트래커</h1>
      <form className="formGroup">
        <div className="inputGroup">
          <label>국가명</label>
          <input type="text" value={name} onChange={inputNameHandler} />
        </div>
        <div className="inputGroup">
          <label>금메달</label>
          <input type="text" value={gold} onChange={inputGoldHandler} />
        </div>
        <div className="inputGroup">
          <label>은메달</label>
          <input type="text" value={silver} onChange={inputSilverHandler} />
        </div>
        <div className="inputGroup">
          <label>동메달</label>
          <input type="text" value={bronze} onChange={inputBronzeHandler} />
        </div>
        <div className="buttonGroup">
          <button type="button" onClick={handleAddCountry}>
            추가하기
          </button>
          <button type="button" onClick={handleUpdateCountry}>
            업데이트
          </button>
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
          {countries.map((countries, index) => (
            <tr key={index}>
              <td>{countries.name}</td>
              <td>{countries.gold}</td>
              <td>{countries.silver}</td>
              <td>{countries.bronze}</td>
              <td>
                <button onClick={() => handleDeleteCountry(countries.id)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
