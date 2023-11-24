import { useState } from 'react';

export const useCount = ({
  max = 5,
  min = 0,
}: {
  max?: number;
  min?: number;
}): {
  count: number;
  increment: () => void;
  decrement: () => void;
} => {
  const [count, setCount] = useState<number>(0);
  const decrement = () =>
    setCount((prevCount) => (prevCount > min ? prevCount - 1 : min));
  const increment = () =>
    setCount((prevCount) => (prevCount < max ? prevCount + 1 : max));

  return { count, increment, decrement };
};
