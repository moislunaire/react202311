import { TState } from '../../../types';

export const selectRestaurantModule = (state: TState) => state.restaurant;

export const selectRestaurantIds = (state: TState) =>
  selectRestaurantModule(state).ids;

export const selectRestaurantById = (state: TState, id: string) =>
  selectRestaurantModule(state).entities[id];
