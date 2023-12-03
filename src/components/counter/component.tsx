export const Counter = ({
  count,
  increment,
  decrement,
  max = 5,
  min = 0,
}: {
  count: number;
  increment: () => void;
  decrement: () => void;
  max?: number;
  min?: number;
}) => {
  return (
    <span>
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
