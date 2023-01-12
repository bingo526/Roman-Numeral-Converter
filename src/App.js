import React, { useState } from "react";
import { convertToRoman } from "./utils";

function App() {
  const [number, setNumber] = useState(0);
  const [romanNumber, setRomanNumber] = useState();
  const onChange = (e) => {
    const value = e.target.value;
    if (value < 2000) setNumber(value);
    else setNumber(1999);
  };
  const onConvert = () => {
    const roman = convertToRoman(number);
    setRomanNumber(roman);
  };
  return (
    <div className="flex flex-col gap-14 justify-center items-center w-full h-screen bg-purple-200 p-10">
      <div className="w-full md:w-1/2 shadow-2xl bg-purple-100 px-8 py-4 rounded-md">
        <h1 className="text-2xl font-bold text-purple-600 lg:text-4xl md:text-3xl">
          Roman Numeral Converter
        </h1>
      </div>
      <div className="w-full md:w-1/2 shadow-lg bg-purple-100 p-8 rounded-md flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
          <h1 className="text-xl font-medium text-purple-600 lg:text-2xl">
            Input Number
          </h1>
          <input
            value={number}
            onChange={onChange}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            className="text-purple-600 text-xl font-bold px-3 py-2 outline-none shadow-md rounded-xl"
          />
        </div>
        <button
          onClick={onConvert}
          className="transition ease-in-out delay-150 text-white text-lg font-semibold bg-purple-500 hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 duration-300 px-24 py-2 rounded-lg"
        >
          Convert Now
        </button>
        <div className="border-4 rounded-xl border-purple-200 w-full h-56 text-9xl font-semibold text-purple-900 flex justify-center items-center">
          {romanNumber}
        </div>
      </div>
    </div>
  );
}

export default App;
