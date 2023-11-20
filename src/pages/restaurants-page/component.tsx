import { Navigation } from '../../components/navigation/component';
import { Restaurants } from '../../components/restaurants/component';
import { TRestaurant } from '../../types';

export const RestaurantsPage = ({
  restaurants,
}: {
  restaurants: TRestaurant[];
}) => {
  const restaurantNames = Array.from(
    new Set(restaurants.map(({ name }) => name))
  );

  return (
    <div>
      <Navigation
        restaurantNames={restaurantNames}
        onRestaurantSelect={(restaurantName: TRestaurant['name']) =>
          console.log(restaurantName)
        }
      />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
