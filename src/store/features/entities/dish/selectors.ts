import { TState } from '../../../types';

export const selectDishModule = (state: TState) => state.dish;

export const selectDishById = (state: TState, id: string) =>
  selectDishModule(state).entities[id];
