"use client";
import React, { useState } from "react";
import useSound from 'use-sound';

export default function Page() {
  const numbers = Array.from({ length: 41 }, (_, i) => i - 20); // [-20...20]
  const [charIndex, setCharIndex] = useState(20); // Start at zero
  const [question, setQuestion] = useState("Add and Subtract Integers Exercises");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [charIcon, setCharIcon] = useState("/questioning.png");
  const [play, { stop }] = useSound("/bgm_9am.mp3", { volume: 0.2, loop: false });

  React.useEffect(() => {
    play();
    return () => {
      stop(); // Stop previous sound instance on unmount or refresh
    };
  }, [play, stop]);

  const moveChar = (num: number) => {
    setCharIndex(num + 20); // Adjust index to match array position
  };

  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 21) - 10; // -10 to 10
    const b = Math.floor(Math.random() * 21) - 10; // -10 to 10
    const op = Math.random() > 0.5 ? "+" : "-";
    setQuestion(`${a} ${op} ${b} = ?`);
    setCorrectAnswer(op === "+" ? a + b : a - b);
    setCharIcon("/questioning.png"); // Reset character icon
    moveChar(a);
  }

  const submitAnswer = (num: number) => {
    if (num === correctAnswer) {
      setCharIcon("/right_answer.png");
      moveChar(num);
    } else {
      setCharIcon("/wrong_answer.png");
    }
  }

  const redirectToFeedback = () => {
    window.location.href = "https://forms.gle/KZhAjrEjzotgpjNY9"; // Replace with your feedback form URL
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-top p-5"
          style={{backgroundColor: "#f0f8ff",
              backgroundImage: "url('/background1.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"}}>
      <div className = "absolute flex-col items-center mb-2">
        <h1 className="text-2xl mb-4 text-center"
            style={{fontWeight: "bold", 
                    backgroundColor:"white", 
                    padding: "5px", 
                    borderRadius: "10px",
			color: "black"}}>
          {question}
        </h1>
        <ul className="text-l mb-2 text-left"
           style={{backgroundColor:"white", 
                  padding: "5px", 
                  borderRadius: "10px", 
                  width: "fit-content",
		color: "black"}}>
          Click on the number line to move the character to the answer. 
          Ask youself:<br></br>
          <li>1. Is this a subtraction or an addition?</li>
          <li>2. Which direction should Stacy move in?</li>
          <li>3. Is the second number a positive or a negative? Should Stacy U-turn?</li>
          <li>4. By how many steps should Stacy move by?</li>
        </ul>
      </div>

      {/* Character Component */}
      <div className="absolute flex-col items-center mb-2">
        {/*Character Image*/}
        <div className="flex flex-col items-center mt-5 relative">
          <img
            src= {charIcon}
            alt="Character"
            style={{ width: "90.4px", height: "192px",
              left: `calc(${(charIndex / 40) * 100}% - 43.7px)`, // 93.75px is half the image width
              position: "absolute",
              bottom:"-365px"
            }}
            className=""
          />
        </div>

        {/*Number Line*/}
        <div className="relative w-[1200px] h-16 border-t-2 border-black  mt-[370px]"
            style={{ backgroundColor: "#e0ffff", 
                    borderRadius: "10px" }}>
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
                  className="absolute top-6 text-sm hover:bg-blue-200 text-black"
                  onClick={() => submitAnswer(num)}
                  style={{ left: "50%",
                          transform: "translateX(-50%)" }}
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

      {/* Button*/}
      <div className="absolute flex items-center justify-center mt-[470px]">
        <button 
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:border-4 hover:border-black"
          style={{width: "fit-content", 
                  height: "fit-content", 
                  fontSize: "30px",
                   fontWeight:"bold"}}
          onClick = {() => generateQuestion()}
        >GENERATE QUESTION</button>
      </div>

      {/*Survey Button*/}
      <button 
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:border-4 hover:border-black mt-[550px]"
        style={{width: "fit-content", 
                height: "fit-content", 
                fontSize: "30px",
                  fontWeight:"bold"}}
        onClick = {() => redirectToFeedback()}
      >Give me some Feedback 𐔌՞꜆.  ̫.꜀՞𐦯</button>
    </main>
  );
}
