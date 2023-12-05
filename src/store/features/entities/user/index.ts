import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../../constants/normalized-mock';
import { TNormalizedUser } from '../../../../types';

export const userSlice = createSlice({
  name: 'useer',
  initialState: {
    entities: normalizedUsers.reduce(
      (acc: Record<string, TNormalizedUser>, user: TNormalizedUser) => {
        acc[user.id] = user;

        return acc;
      },
      {}
    ),
    ids: normalizedUsers.map(({ id }) => id),
  },
  reducers: {},
});
