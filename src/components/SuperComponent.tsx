import { CSSProperties, FC, useState } from "react";

const SuperComponent: FC = () => {
  const [count, setCount] = useState(0);
  const increaseCounter = () => setCount((count) => count + 1);

  const isEven = count % 2 === 0;

  const countColor: CSSProperties = {
    color: isEven ? "red" : "blue",
  };

  return (
    <button onClick={increaseCounter}>
      count is <span data-testid="counter" style={countColor}>{count}</span>
    </button>
  );
};

export default SuperComponent;
