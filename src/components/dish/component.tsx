import { TMenu } from '../../types';

export const Dish = ({ dish }: { dish: TMenu }) => {
  return <div>{dish.name}</div>;
};
