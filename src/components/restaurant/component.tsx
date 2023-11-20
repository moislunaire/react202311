import { TRestaurant } from '../../types';
import { RestaurantMenu } from '../restaurantMenu/component';
import { RestaurantReviews } from '../restaurantReviews/component';

export const Restaurant = ({ restaurant }: { restaurant: TRestaurant }) => {
  return (
    <div>
      <h2>Ресторан: {restaurant.name}</h2>
      <RestaurantMenu restaurantMenus={restaurant.menu} />
      <RestaurantReviews restaurantReviews={restaurant.reviews} />
    </div>
  );
};
