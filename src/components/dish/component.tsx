import { TMenu } from '../../types';

export const Dish = ({ dish }: { dish: TMenu }) => {
  return <span>{dish.name}</span>;
};
