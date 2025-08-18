"use client";
import NumberLine from "@/components/number_line";
import CharComponent from "@/components/char_component";
import { useState } from "react";

export default function Page() {
  const numbers = Array.from({ length: 41 }, (_, i) => i - 20); // [-20...20]
  const [charIndex, setCharIndex] = useState(20); // Start at zero
  const [question, setQuestion] = useState("Add and Subtract Integers Exercises");

  const moveStacy = (num: number) => {
    console.log(`Move Stacy to ${num}`);
    setCharIndex(num + 20); // Adjust index to match array position
  };

  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 21) - 10; // -10 to 10
    const b = Math.floor(Math.random() * 21) - 10; // -10 to 10
    const op = Math.random() > 0.5 ? "+" : "-";
    setQuestion(`${a} ${op} ${b} = ?`);
    moveStacy(a);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-top p-10">
      <div className = "absolute flex-col items-center">
        <h1 className="text-2xl mb-4 text-center">
          {question}
        </h1>
        <p className="text-l mb-4 text-center">Click on the number line to move the character to the answer.</p>
      </div>
      <div className="absolute flex-col items-center mb-10">
        <div className="flex flex-col items-center mt-10">
          <img
            src="/char.png"
            alt="Character"
            style={{ width: "187.5px", height: "333px",
              left: `calc(${(charIndex / 40) * 100}% - 93.75px)`, // 93.75px is half the image width
              position: "absolute"
            }}
            className="absolute"
          />
        <div className="relative w-[1200px] h-16 border-t-2 border-black -bottom-75">

          {/* Divide tick marks into columns */}
          <div className="flex w-full h-full">
            {numbers.map((num, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center flex-1"
              >
                {/* Tick mark */}
                <div className="w-px h-4 bg-black" />

                {/* Number label */}
                <button
                  className="absolute top-6 text-sm hover:bg-blue-200"
                  onClick={() => moveStacy(num)}
                  style={{ left: "50%", transform: "translateX(-50%)" }}
                >
                  {num}
                </button>
              </div>
            ))}
          </div>
          {/* Zero line highlight */}
          <div className="absolute left-1/2 top-0 w-px h-6 bg-red-500" />
        </div>
      </div>

      </div>
      <div className="absolute flex items-center justify-center bottom-5">
        <button 
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:border-4 hover:border-black"
          style={{width: "fit-content", height: "fit-content", fontSize: "30px", fontWeight:"bold"}}
          onClick = {() => generateQuestion()}
        >GENERATE QUESTION</button>
      </div>
    </main>
  );
}
