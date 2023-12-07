import { useSelector } from 'react-redux';
import { Tab } from '../tab/component';
import styles from './styles.module.css';
import { selectRestaurantIds } from '../../store/features/entities/restaurant/selectors';

export const RestaurantTabs = ({
  onRestaurantSelect,
}: {
  onRestaurantSelect: (restaurantId: string) => void;
}) => {
  const restaurantIds = useSelector(selectRestaurantIds);

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
