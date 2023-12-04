import { useState } from 'react';
import { TMenu } from '../../types';
import { Counter } from '../counter/component';

export const Dish = ({ dish }: { dish: TMenu }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Counter
        count={count}
        increment={() => setCount((prevCount) => prevCount + 1)}
        decrement={() => setCount((prevCount) => prevCount - 1)}
      />
      <span>{dish.name}</span>
    </>
  );
};
