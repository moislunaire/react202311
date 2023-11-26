import { TFormValue } from '../types';

export const DEFAULT_FORM_VALUE: TFormValue = {
  name: '',
  text: '',
  rating: 1,
} as const;

export const actionNames = {
  setName: 'setName',
  setText: 'setText',
  setRating: 'setRating',
} as const;
