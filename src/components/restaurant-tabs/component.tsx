import { Tab } from '../tab/component';
import styles from './styles.module.css';

export const RestaurantTabs = ({
  restaurantIds,
  onRestaurantSelect,
}: {
  restaurantIds: string[];
  onRestaurantSelect: (restaurantId: string) => void;
}) => {
  return (
    <div className={styles.restaurantTabs}>
      {restaurantIds.map((restaurantId) => (
        <Tab
          key={restaurantId}
          id={restaurantId}
          onClick={() => onRestaurantSelect(restaurantId)}
        />
      ))}
    </div>
  );
};
