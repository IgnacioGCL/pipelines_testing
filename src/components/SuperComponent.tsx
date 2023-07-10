import { FC, useState } from "react";

const SuperComponent: FC = () => {
  const [count, setCount] = useState(0);
  const increaseCounter = () => setCount((count) => count + 1);

  return <button onClick={increaseCounter}>count is {count}</button>;
};

export default SuperComponent;
