import { TRestaurant } from '../../types';
import { Restaurant } from '../restaurant/component';

export const Restaurants = ({
  restaurants,
}: {
  restaurants: TRestaurant[];
}) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      ))}
    </>
  );
};
