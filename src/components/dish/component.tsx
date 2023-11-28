import { useCount } from '../../hooks/useCount';
import { TMenu } from '../../types';
import { Counter } from '../counter/component';
import styles from './styles.module.css';

export const Dish = ({ dish }: { dish: TMenu }) => {
  const { count, increment, decrement } = useCount({});

  return (
    <div className={styles.dish}>
      <span>{dish.name}</span>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        className={styles.counterContainer}
      />
    </div>
  );
};
