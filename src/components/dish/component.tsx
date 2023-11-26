import { useCount } from '../../hooks/useCount';
import { TMenu } from '../../types';
import { Counter } from '../counter/component';

export const Dish = ({ dish }: { dish: TMenu }) => {
  const { count, increment, decrement } = useCount({});

  return (
    <>
      <Counter count={count} increment={increment} decrement={decrement} />
      <span>{dish.name}</span>
    </>
  );
};
