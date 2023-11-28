import { TRestaurant } from '../../types';
import { Tab } from '../tab/component';
import styles from './styles.module.css';

export const RestaurantTabs = ({
  restaurantNames,
  onRestaurantSelect,
}: {
  restaurantNames: TRestaurant['name'][];
  onRestaurantSelect: (restaurantName: TRestaurant['name']) => void;
}) => {
  return (
    <div className={styles.restaurantTabs}>
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
