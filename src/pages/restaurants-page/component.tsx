import { useState } from 'react';
import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { TRestaurant } from '../../types';
import { Restaurant } from '../../components/restaurant/component';
import { Layout } from '../../components/layout/component';

export const RestaurantsPage = ({
  restaurants,
}: {
  restaurants: TRestaurant[];
}) => {
  const restaurantNames = Array.from(
    new Set(restaurants.map(({ name }) => name))
  );
  const [selectedRestaurantName, setSelectedRestaurantName] = useState<
    TRestaurant['name'] | null
  >(null);

  const selectedRestaurant = restaurants.find(
    ({ name }) => name === selectedRestaurantName
  );

  return (
    <Layout>
      <>
        <RestaurantTabs
          restaurantNames={restaurantNames}
          onRestaurantSelect={setSelectedRestaurantName}
        />
        {selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}
      </>
    </Layout>
  );
};
