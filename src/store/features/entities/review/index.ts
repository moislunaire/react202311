import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../../constants/normalized-mock';
import { TNormalizedReview } from '../../../../types';

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    entities: normalizedReviews.reduce(
      (acc: Record<string, TNormalizedReview>, review: TNormalizedReview) => {
        acc[review.id] = review;

        return acc;
      },
      {}
    ),
    ids: normalizedReviews.map(({ id }) => id),
  },
  reducers: {},
});
