import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

function DisplayOutput({ data }) {
  const [formattedCurrentOperand, setFormattedCurrentOperand] = useState(0);
  const [formattedPreviousOperand, setFormattedPreviousOperand] = useState(0);
  const [formattedResult, setFormattedResult] = useState(0);

  const { currentOperand, previousOperand, operation, result, showResult } =
    data;

  const integerFormatter = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
  });

  const formatOperand = (operand) => {
    if (operand === null || operand === "" || operand === "-") return "0";
    const [integer, decimal] = operand.split(".");
    if (decimal === null || decimal === undefined)
      return integerFormatter.format(integer);
    return `${integerFormatter.format(integer)}.${decimal}`;
  };

  useEffect(() => {
    setFormattedCurrentOperand(formatOperand(currentOperand));
    setFormattedPreviousOperand(formatOperand(previousOperand));
    setFormattedResult(formatOperand(result));
  }, [currentOperand, previousOperand, result]);

  return (
    <div className='output'>
      <div className='previous-operand'>
        {`${formattedPreviousOperand} ${operation}`}
      </div>
      <div className='current-operand'>
        {!showResult ? formattedCurrentOperand : formattedResult}
      </div>
    </div>
  );
}

export default DisplayOutput;
