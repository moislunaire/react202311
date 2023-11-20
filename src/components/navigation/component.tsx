import { TRestaurant } from '../../types';
import { NavigationButton } from '../navigation-button/component';

export const Navigation = ({
  restaurantNames,
  onRestaurantSelect,
}: {
  restaurantNames: TRestaurant['name'][];
  onRestaurantSelect: (restaurantName: TRestaurant['name']) => void;
}) => {
  return (
    <div>
      {restaurantNames.map((restaurantName) => (
        <NavigationButton
          key={restaurantName}
          title={restaurantName}
          onClick={() => onRestaurantSelect(restaurantName)}
        />
      ))}
    </div>
  );
};
