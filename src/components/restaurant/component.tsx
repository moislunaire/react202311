import { useSelector } from 'react-redux';
import { TNormalizedRestaurant } from '../../types';
import { Menu } from '../menu/component';
import { ReviewForm } from '../review-form/component';
import { Reviews } from '../reviews/component';
import styles from './styles.module.css';
import { TState } from '../../store/types';
import { selectRestaurantById } from '../../store/features/entities/restaurant/selectors';

export const Restaurant = ({
  restaurantId,
}: {
  restaurantId: TNormalizedRestaurant['id'];
}) => {
  const restaurant = useSelector((state: TState) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Ресторан: {restaurant.name}</h2>
      <Menu dishIds={restaurant.menu} />
      <Reviews reviewIds={restaurant.reviews} />
      <ReviewForm id={restaurantId} />
    </div>
  );
};
