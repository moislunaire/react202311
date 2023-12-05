import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../../constants/normalized-mock';
import { TNormalizedRestaurant } from '../../../../types';

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    entities: normalizedRestaurants.reduce(
      (
        acc: Record<string, TNormalizedRestaurant>,
        restaurant: TNormalizedRestaurant
      ) => {
        acc[restaurant.id] = restaurant;

        return acc;
      },
      {}
    ),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
  reducers: {},
});
