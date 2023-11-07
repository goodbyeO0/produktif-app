"use client";

import { useState } from "react";
import Link from "next/link";

export default function Todo() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([null]);

  const handleData = () => {
    if (input !== "") {
      setData([...data, input]);
      setInput("");
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (e) => {
    setData(
      data.filter((value, i) => {
        if (e !== i) {
          return value;
        }
      })
    );
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleData}>+</button>
      <ul>
        {data.map((value, i) => {
          if (value != null) {
            return (
              <div key={i} className="flex">
                <li>{data[i]}</li>
                <button onClick={() => handleDelete(i)}>-</button>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}
