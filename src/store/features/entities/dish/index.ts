import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../../constants/normalized-mock';
import { TNormalizedDish } from '../../../../types';

export const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    entities: normalizedDishes.reduce(
      (acc: Record<string, TNormalizedDish>, dish: TNormalizedDish) => {
        acc[dish.id] = dish;

        return acc;
      },
      {}
    ),
    ids: normalizedDishes.map(({ id }) => id),
  },
  reducers: {},
});
