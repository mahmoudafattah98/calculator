import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import { evaluate } from "mathjs";
import "../styles/calcStyle.css";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  function addToExpression(symbol) {
    setExpression((prev) => prev + symbol);
  }

  function refreshOutput(event) {
    setExpression(event.target.value);
  }
  function evaluateExpression() {
    try {
      const evaluatedResult = evaluate(expression);
      setResult(evaluatedResult);
      setExpression(evaluatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  }

  function clearExpression() {
    setExpression("");
    setResult("");
  }

  function del() {
    setExpression((prev) => prev.slice(0, -1));
  }

  return (
    <>
      <div className="calculator">
        <div className="textArea">
          <input
            type="text"
            placeholder="  Type or use the buttons below..."
            value={expression}
            onChange={refreshOutput}
            className={"expressionInput"}
          />
        </div>
        <br />
        <div className="numpad">
          <button className={"delButton"} onClick={() => del()}>
            DEL
          </button>
          <button className={"numButton"} onClick={() => addToExpression("0")}>
            0
          </button>
          <button className={"numButton"} onClick={() => addToExpression(".")}>
            .
          </button>
          <button className={"numButton"} onClick={() => addToExpression("1")}>
            1
          </button>
          <button className={"numButton"} onClick={() => addToExpression("2")}>
            2
          </button>
          <button className={"numButton"} onClick={() => addToExpression("3")}>
            3
          </button>
          <button className={"numButton"} onClick={() => addToExpression("4")}>
            4
          </button>
          <button className={"numButton"} onClick={() => addToExpression("5")}>
            5
          </button>
          <button className={"numButton"} onClick={() => addToExpression("6")}>
            6
          </button>
          <button className={"numButton"} onClick={() => addToExpression("7")}>
            7
          </button>
          <button className={"numButton"} onClick={() => addToExpression("8")}>
            8
          </button>
          <button className={"numButton"} onClick={() => addToExpression("9")}>
            9
          </button>
        </div>
        <div className="controls">
          <button
            className={"operandButton"}
            onClick={() => addToExpression("+")}
          >
            +
          </button>
          <button
            className={"operandButton"}
            onClick={() => addToExpression("-")}
          >
            -
          </button>
          <button
            className={"operandButton"}
            onClick={() => addToExpression("*")}
          >
            *
          </button>
          <button
            className={"operandButton"}
            onClick={() => addToExpression("/")}
          >
            /
          </button>
        </div>
        <div className="inputs">
          <button className={"clearButton"} onClick={clearExpression}>
            C
          </button>{" "}
          <button className={"equalButton"} onClick={evaluateExpression}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
