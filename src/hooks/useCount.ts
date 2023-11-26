import { useEffect, useState } from 'react';

export const useCount = ({
  max = 5,
  min = 0,
  step = 1,
  defaultValue = 0,
}: {
  max?: number;
  min?: number;
  step?: number;
  defaultValue?: number;
}) => {
  const [count, setCount] = useState<number>(defaultValue);
  const decrement = () =>
    setCount((prevCount) => (prevCount > min ? prevCount - step : min));
  const increment = () =>
    setCount((prevCount) => (prevCount < max ? prevCount + step : max));

  useEffect(() => {
    setCount(defaultValue);
  }, [defaultValue]);

  return { count, increment, decrement };
};
