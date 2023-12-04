import { TRestaurant } from '../../types';
import { Menu } from '../menu/component';
import { ReviewForm } from '../review-form/component';
import { Reviews } from '../reviews/component';
import styles from './styles.module.css';

export const Restaurant = ({ restaurant }: { restaurant: TRestaurant }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Ресторан: {restaurant.name}</h2>
      <Menu dishes={restaurant.menu} />
      <Reviews restaurantReviews={restaurant.reviews} />
      <ReviewForm id={restaurant.id} />
    </div>
  );
};
