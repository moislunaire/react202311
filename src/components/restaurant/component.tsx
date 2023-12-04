import { TRestaurant } from '../../types';
import { Menu } from '../menu/component';
import { ReviewForm } from '../review-form/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ restaurant }: { restaurant: TRestaurant }) => {
  return (
    <>
      <div>
        <h2>Ресторан: {restaurant.name}</h2>
        <Menu dishes={restaurant.menu} />
        <Reviews restaurantReviews={restaurant.reviews} />
      </div>
      <ReviewForm id={restaurant.id} />
    </>
  );
};
