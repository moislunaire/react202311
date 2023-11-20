import { RestaurantTabs } from '../../components/restaurant-tabs/component';
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
      <RestaurantTabs
        restaurantNames={restaurantNames}
        onRestaurantSelect={(restaurantName: TRestaurant['name']) =>
          console.log(restaurantName)
        }
      />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
