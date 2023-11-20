import { TRestaurant } from '../../types';

export const Tab = ({
  title,
  onClick,
}: {
  title: TRestaurant['name'];
  onClick: () => void;
}) => {
  return <button onClick={onClick}>{title}</button>;
};
