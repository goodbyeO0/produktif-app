"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Todo() {
  const [input, setInput] = useState("");
  const [date, setDate] = useState([]);
  const [dataInput, setDataInput] = useState([]);
  const [dataDate, setDataDate] = useState([]);

  const handleData = () => {
    if (input !== "" && date !== "") {
      setDataInput([...dataInput, input]);
      setDataDate([...dataDate, date]);
      setInput("");
      setDate("");
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (index) => {
    setDataInput(
      dataInput.filter((value, i) => {
        if (index !== i) {
          return value;
        }
      })
    );
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="m-2">
      <h1 className="text-[#192655] font-extrabold text-6xl">ToDo list</h1>

      <input
        type="text"
        value={input}
        onChange={handleInput}
        className="mb-3 border-2 border-slate-800 mt-3 p-1 w-[500px] bg-[#f2edab] rounded-md focus:bg-[#e9e173]"
      />

      <input type="date" onChange={handleDate} value={date} />

      <button onClick={handleData}>
        <span className=" ml-3 text-2xl">+</span>
      </button>
      <ul className="grid grid-cols-1 font-bold text-[#3876BF] text-xl">
        {dataInput.map((value, i) => {
          return (
            <div key={i} className="flex">
              <li className="ms-3 ">{value}</li>
              <li className="ms-3 text-red-400">
                <Timer date={dataDate[i]} />
              </li>
              <button onClick={() => handleDelete(i)}>
                <span className="ml-3 text-2xl">-</span>
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const Timer = ({ date }) => {
  const dueDate = new Date(date);

  const remainingTime = () => {
    const now = new Date();
    let timeMs = dueDate - now;

    if (timeMs <= 0) {
      return 0; // Return 0 if the time has already passed
    }

    return Math.floor(timeMs / 1000);
  };

  const [timeRemaining, setTimeRemaining] = useState(remainingTime());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(remainingTime());
    }, 1000);

    return () => clearInterval(timerInterval);
  }); // Include 'date' as a dependency to update the timer when the date changes

  return (
    <div>
      <p>{timeRemaining}s</p>
    </div>
  );
};
