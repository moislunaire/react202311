export const Counter = ({
  count,
  increment,
  decrement,
}: {
  count: number;
  increment: () => void;
  decrement: () => void;
}) => {
  return (
    <span>
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
