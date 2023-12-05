import { TState } from '../../../types';

export const selectReviewModule = (state: TState) => state.review;

export const selectReviewById = (state: TState, id: string) =>
  selectReviewModule(state).entities[id];
