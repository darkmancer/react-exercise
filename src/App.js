import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";
import { getCovid } from "./service/service";

export default function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState();
  const [covidNumber, setCovidNumber] = useState();

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  let toggleCount = () => {
    setShow((show) => !show);
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    alert("Welcome to COUNTER APP BITCH");
    const fetchData = async() => {
      const data = await getCovid();
      console.log(data);
      setCovidNumber(data.total_case);
    }
    fetchData()
  }, []);

  useEffect(() => {
    alert("TOGGLED BITCH");
  }, [show]);
  console.log(covidNumber);

  return (
    <div className="app">
      <div>
        {show ? (
          <div class="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
        ) : (
          <></>
        )}
        <div />
        <div class="count">TOTAL COVID INFECTED {covidNumber}</div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
          <Button title={"toggle"} action={toggleCount} />
        </div>
      </div>
    </div>
  );
}

/* React Challenge
  เขียน app.js ขึ้นมาเป็นแอพ เคาเต้อที่ประกอบไปด้วย
  1.ฟีเจ้อเพิ่มจำนวนcount กด1ครั้งเพิ่ม1
  2.ฟีเจ้อลดจำนวนcount กด1ครั้งลด1
  3.ฟีเจ้อ ปุ่มกดซ่อนCount  toggleได้
  4.ถ้าcount เพิ่มหรือลด ต้องแสดงที่ title ของ browserด้วย
  5.ครั้งแรกที่เข้าหน้าเว็ปต้องAlert ว่า Welcome to COUNTER APP BITCH
  6.ทุกครั้งที่ Toggle ต้องAlertว่า TOGGLED BITCH
  7.ต่อAPI https://covid19.ddc.moph.go.th/api/Cases/today-cases-all เพื่อหยิบจำนวนผู้ติดโควิทมาแสดงแทนCount
*/
