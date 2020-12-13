import { isValidElement, useMemo, useState } from "react";

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
      <div>counterOne={counterOne}</div>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={increaseCounterOne}>Increase Counter One</button>
      <div>counterTwo={counterTwo}</div>
      <button onClick={increaseCounterTwo}>Increase Counter Two</button>
    </>
  );
};

export default Counter;
