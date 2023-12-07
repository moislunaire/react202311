import classnames from 'classnames';
import styles from './styles.module.css';
import { Button } from '../button/component';

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
      <Button onClick={decrement} disabled={count <= min}>
        -
      </Button>{' '}
      {count}{' '}
      <Button onClick={increment} disabled={count >= max}>
        +
      </Button>
    </span>
  );
};
