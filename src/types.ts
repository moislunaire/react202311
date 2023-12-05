import { actionNames } from './constants/review-form';

export type TMenu = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export type TRewiew = {
  id: string;
  user: string;
  text: string;
  rating: number;
};

export type TRestaurant = {
  id: string;
  name: string;
  menu: TMenu[];
  reviews: TRewiew[];
};

export type TFormValue = {
  name: string;
  text: string;
  rating: number;
};

export type TReviewFormAction =
  | {
      type: (typeof actionNames)['setName'] | (typeof actionNames)['setText'];
      payload: string;
    }
  | {
      type: (typeof actionNames)['setRating'];
      payload: number;
    };

export type TTheme = 'dark' | 'light';
