import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return <div>
    <Steps />
  </div>
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(s => !s)}>&times;</button>
      {isOpen &&
        (<div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
          </div>
          <p className="message">Step {step}: {messages[step - 1]}</p>
          <div className="buttons">
            <button
              onClick={() => {
                setStep(s => s > 1 ? s - 1 : s)
              }}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              <span>previous</span>
            </button>
            <button
              onClick={() => {
                setStep(s => s < 3 ? s + 1 : s)
              }}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              <span>next</span>
            </button>
          </div>
        </div>)
      }
    </div>
  )
}