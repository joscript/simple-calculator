import "./style.css";

import { useCallback, useState } from "react";
import InputKeys from "./components/InputKeys";
import DisplayOutput from "./components/DisplayOutput";

function App() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [continueOperation, setContinueOPeration] = useState(false);

  const onClickNumbers = useCallback(
    (value) => {
      setCurrentOperand(currentOperand + value);
      setShowResult(false);
      if (!continueOperation) setResult("");
    },
    [currentOperand]
  );

  const onClickOperation = useCallback(
    (key) => {
      if (continueOperation) {
        if (!currentOperand || !previousOperand) {
          setOperation(key.value);
        } else {
          const computationResult = calculate(
            currentOperand,
            previousOperand,
            operation
          );
          setPreviousOperand(computationResult);
          setResult(computationResult);
        }
        setCurrentOperand("");
      } else {
        setPreviousOperand(result ? result : currentOperand);
        setCurrentOperand("");
        setResult("");
      }
      setOperation(key.value);
      setContinueOPeration(true);
    },
    [currentOperand, result]
  );

  const onClickDelAc = useCallback(
    (key) => {
      if (key.value === "AC") {
        if (result) setResult("");
        setCurrentOperand("");
        setPreviousOperand("");
        setOperation("");
      } else if (key.value === "DEL") {
        if (result && !currentOperand)
          setResult(result.slice(0, result.length - 1));
        else if (!result && currentOperand)
          setCurrentOperand(currentOperand.slice(0, currentOperand.length - 1));
        else
          setCurrentOperand(currentOperand.slice(0, currentOperand.length - 1));
      }
    },
    [currentOperand, result]
  );

  const onClickPercent = useCallback(() => {
    if (!currentOperand) return;
    const percentResult = String(
      parseFloat(result ? result : currentOperand) / 100
    );
    setCurrentOperand(percentResult);
    setResult(percentResult);
    setShowResult(false);
  }, [currentOperand, result]);

  const onClickPositiveNegativeSign = useCallback(() => {
    if (result) {
      if (result.charAt(0) === "-") {
        setResult(result.substring(1));
      } else setResult("-" + result);
    } else {
      if (currentOperand.charAt(0) === "-") {
        setCurrentOperand(currentOperand.substring(1));
      } else setCurrentOperand("-" + currentOperand);
    }
  }, [currentOperand, result]);

  const onClickEqual = useCallback(
    (key) => {
      if (!currentOperand || !previousOperand) return;
      if (key.value === "=") {
        const computationResult = calculate(
          currentOperand,
          previousOperand,
          operation
        );
        setResult(computationResult);
        setPreviousOperand("");
        setCurrentOperand("");
        setOperation("");
        setShowResult(true);
        setContinueOPeration(false);
      }
    },
    [currentOperand]
  );

  const calculate = (currentOperand, previousOperand, operation) => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    let computation = "";
    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
    }
    return computation.toString();
  };

  return (
    <div className='calculator-grid'>
      <DisplayOutput
        data={{
          currentOperand,
          previousOperand,
          operation,
          result,
          showResult,
        }}
      />
      <InputKeys
        onClickFunctions={{
          onClickNumbers,
          onClickOperation,
          onClickDelAc,
          onClickPercent,
          onClickEqual,
          onClickPositiveNegativeSign,
        }}
      />
    </div>
  );
}

export default App;
