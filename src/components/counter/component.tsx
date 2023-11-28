import classnames from 'classnames';
import styles from './styles.module.css';

export const Counter = ({
  count,
  increment,
  decrement,
  className,
}: {
  count: number;
  increment: () => void;
  decrement: () => void;
  className?: string;
}) => {
  return (
    <span className={classnames(className, styles.counter)}>
      <button onClick={decrement} type="button">
        -
      </button>{' '}
      {count}{' '}
      <button onClick={increment} type="button">
        +
      </button>
    </span>
  );
};
