import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Counter } from '../counter/component';
import styles from './styles.module.css';
import { TState } from '../../store/types';
import { selectDishById } from '../../store/features/entities/dish/selectors';

export const Dish = ({ dishId }: { dishId: string }) => {
  const [count, setCount] = useState<number>(0);
  const dish = useSelector((state: TState) => selectDishById(state, dishId));

  return (
    <div className={styles.dish}>
      <span>{dish.name}</span>
      <Counter
        count={count}
        increment={() => setCount((prevCount) => prevCount + 1)}
        decrement={() => setCount((prevCount) => prevCount - 1)}
        className={styles.counterContainer}
      />
    </div>
  );
};
