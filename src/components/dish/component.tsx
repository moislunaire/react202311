import { useState } from 'react';
import { TMenu } from '../../types';
import { Counter } from '../counter/component';
import styles from './styles.module.css';

export const Dish = ({ dish }: { dish: TMenu }) => {
  const [count, setCount] = useState<number>(0);

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
