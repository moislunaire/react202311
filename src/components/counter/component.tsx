import classnames from 'classnames';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

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
  const { theme } = useContext(ThemeContext);

  return (
    <span className={classnames(className, styles.counter)}>
      <button onClick={decrement} type="button" className={styles[theme]}>
        -
      </button>{' '}
      {count}{' '}
      <button onClick={increment} type="button" className={styles[theme]}>
        +
      </button>
    </span>
  );
};
