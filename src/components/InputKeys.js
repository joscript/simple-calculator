import React, { useMemo } from "react";

function InputKeys({ onClickFunctions }) {
  const {
    onClickNumbers,
    onClickOperation,
    onClickDelAc,
    onClickPercent,
    onClickEqual,
    onClickPositiveNegativeSign,
  } = onClickFunctions;

  const inputKeys = useMemo(() => {
    return [
      { value: "AC", type: "fn" },
      { value: "DEL", type: "fn" },
      { value: "+/-", type: "positiveNegativeSign" },
      { value: "÷", type: "operator" },
      { value: 1, type: "number" },
      { value: 2, type: "number" },
      { value: 3, type: "number" },
      { value: "*", type: "operator" },
      { value: 4, type: "number" },
      { value: 5, type: "number" },
      { value: 6, type: "number" },
      { value: "+", type: "operator" },
      { value: 7, type: "number" },
      { value: 8, type: "number" },
      { value: 9, type: "number" },
      { value: "-", type: "operator" },
      { value: "%", type: "percent" },
      { value: 0, type: "number" },
      { value: ".", type: "number" },
      { value: "=", type: "equal" },
    ];
  }, []);

  const renderKeys = () => {
    return inputKeys.map((key) => {
      let className = "";
      if (key.type === "number") className = "btn-number";
      if (key.type === "operator" || key.type === "equal")
        className = "btn-operator";
      if (key.type === "fn") className = "btn-fn";

      return (
        <button
          key={key.value}
          className={className}
          onClick={(e) => {
            if (key.type === "number") return onClickNumbers(e.target.value);
            if (key.type === "operator") return onClickOperation(key);
            if (key.type === "fn") return onClickDelAc(key);
            if (key.type === "percent") return onClickPercent();
            if (key.type === "equal") return onClickEqual(key);
            if (key.type === "positiveNegativeSign")
              return onClickPositiveNegativeSign();
          }}
          value={key.value}
        >
          {key.value}
        </button>
      );
    });
  };

  return renderKeys();
}

export default InputKeys;
