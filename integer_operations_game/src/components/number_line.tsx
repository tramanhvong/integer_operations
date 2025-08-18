"use client";
import { useState } from "react";

export default function NumberLine() {
  const numbers = Array.from({ length: 41 }, (_, i) => i - 20); // [-20...20]
  const [charIndex, setCharIndex] = useState(20); // Start at zero

  const moveStacy = (num: number) => {
    console.log(`Move Stacy to ${num}`);
    setCharIndex(num + 20); // Adjust index to match array position
  };

  return (
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
  );
}
