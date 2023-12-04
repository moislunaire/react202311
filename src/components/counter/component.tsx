import classnames from 'classnames';
import styles from './styles.module.css';

export const Counter = ({
  count,
  className,
  increment,
  decrement,
  max = 5,
  min = 0,
}: {
  count: number;
  increment: () => void;
  decrement: () => void;
  className?: string;
  max?: number;
  min?: number;
}) => {
  return (
    <span className={classnames(className, styles.counter)}>
      <button onClick={decrement} type="button" disabled={count <= min}>
        -
      </button>{' '}
      {count}{' '}
      <button onClick={increment} type="button" disabled={count >= max}>
        +
      </button>
    </span>
  );
};
