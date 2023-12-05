import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { TNormalizedRestaurant } from '../../types';
import { Restaurant } from '../../components/restaurant/component';
import { Layout } from '../../components/layout/component';
import { selectRestaurantIds } from '../../store/features/entities/restaurant/selectors';

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  const [selectedRestaurantId, setSelectedRestaurantId] = useState<
    TNormalizedRestaurant['id'] | null
  >(null);

  return (
    <Layout>
      <>
        <RestaurantTabs
          restaurantIds={restaurantIds}
          onRestaurantSelect={setSelectedRestaurantId}
        />
        {selectedRestaurantId && (
          <Restaurant restaurantId={selectedRestaurantId} />
        )}
      </>
    </Layout>
  );
};
