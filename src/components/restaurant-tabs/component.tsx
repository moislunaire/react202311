import { TRestaurant } from '../../types';
import { Tab } from '../tab/component';

export const RestaurantTabs = ({
  restaurantNames,
  onRestaurantSelect,
}: {
  restaurantNames: TRestaurant['name'][];
  onRestaurantSelect: (restaurantName: TRestaurant['name']) => void;
}) => {
  return (
    <div>
      {restaurantNames.map((restaurantName) => (
        <Tab
          key={restaurantName}
          title={restaurantName}
          onClick={() => onRestaurantSelect(restaurantName)}
        />
      ))}
    </div>
  );
};
