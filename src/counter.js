import { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const increaseCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const increaseCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0 ? true : false;
  }, [counterOne]);

  return (
    <>
      <div>
        <button onClick={increaseCounterOne}>counterOne={counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={increaseCounterTwo}>counterTwo={counterTwo}</button>
      </div>
    </>
  );
};

export default Counter;
