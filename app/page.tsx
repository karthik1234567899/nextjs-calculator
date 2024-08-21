'use client';

import Button from "@/app/ui/button";
import { useState } from "react";
import { evaluate, MathExpression } from 'mathjs';


function clicked(label: String, equation: String, setEquation: Function) {
  if (label === "AC") {
    setEquation("");
  } else if (label === "=") {
    try {
      var temp = equation.replace("×", "*");
      temp = temp.replace("÷", "/");
      const result = evaluate(temp as MathExpression);
      setEquation(result.toString());
    } catch (error) {
      setEquation(`Error!`);
    }
  } else if (label === "⌫") {
    setEquation(equation.slice(0, equation.length - 1));
  } else {
    setEquation(`${equation}${label}`);
  }
}

export default function Home() {
  const [equation, setEquation] = useState("");

  return (
    <main className="h-screen bg-gradient-to-br from-[#591E5E] to-[#C3C07C] flex items-center justify-center">
      <div className="flex flex-col bg-gradient-to-br from-[#24252F] to-[#1E2A5E] w-max h-max rounded-3xl items-center p-10">
        <div className="sm:w-screen w-52 max-w-72 h-24 bg-[#E1D7B7] rounded-2xl text-black p-6 text-3xl flex items-end justify-end">
          {equation}
        </div>
        <div className="grid grid-flow-row grid-cols-4 gap-3 w-full justify-items-center items-center mt-7">
          <Button label="AC" color="special-operation" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="÷" color="operation" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="×" color="operation" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="⌫" color="operation" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="7" color="number" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="8" color="number" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="9" color="number" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="-" color="operation" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="4" color="number" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="5" color="number" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="6" color="number" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="+" color="operation" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="1" color="number" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="2" color="number" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="3" color="number" onClick={clicked} equation={equation} setEquation={setEquation} />
          <Button label="=" color="special-operation" onClick={clicked} rowSpan={2} equation={equation} setEquation={setEquation} />
          <Button label="0" color="number" onClick={clicked} colSpan={2} equation={equation} setEquation={setEquation} />
          <Button label="." color="operation" onClick={clicked} equation={equation} setEquation={setEquation} />
        </div>
      </div>
    </main>
  );
}
