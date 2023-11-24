import { useCount } from '../../hooks/useCount';

export const Counter = () => {
  const { count, increment, decrement } = useCount({});
  return (
    <span>
      <button onClick={decrement}>-</button> {count}{' '}
      <button onClick={increment}>+</button>
    </span>
  );
};
