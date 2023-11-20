import { useState } from 'react';

export const useCount = (): {
  count: number;
  increment: () => void;
  decrement: () => void;
} => {
  const [count, setCount] = useState<number>(0);
  const decrement = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  const increment = () => setCount((prevCount) => prevCount + 1);

  return { count, increment, decrement };
};
