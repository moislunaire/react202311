import {
  ChangeEvent,
  Reducer,
  SyntheticEvent,
  useEffect,
  useReducer,
} from 'react';
import { TFormValue, TRestaurant, TReviewFormAction } from '../../types';
import { DEFAULT_FORM_VALUE, actionNames } from '../../constants/review-form';
import { Counter } from '../counter/component';
import { useCount } from '../../hooks/useCount';

const reducer: Reducer<TFormValue, TReviewFormAction> = (
  state,
  { type, payload }
) => {
  switch (type) {
    case actionNames.setName:
      return {
        ...state,
        name: payload,
        text: DEFAULT_FORM_VALUE.name,
        rating: DEFAULT_FORM_VALUE.rating,
      };
    case actionNames.setText:
      return { ...state, text: payload };
    case actionNames.setRating:
      return { ...state, rating: payload };
    default:
      return state;
  }
};

export const ReviewForm = ({ id }: { id: TRestaurant['id'] }) => {
  const [formValue, dispatch] = useReducer<
    Reducer<TFormValue, TReviewFormAction>
  >(reducer, DEFAULT_FORM_VALUE);

  const { count, increment, decrement } = useCount({
    min: 1,
    step: 0.5,
    defaultValue: formValue.rating,
  });

  const clearForm = () => {
    dispatch({ type: actionNames.setName, payload: '' });
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(formValue);
    clearForm();
  };

  useEffect(() => {
    dispatch({ type: actionNames.setRating, payload: count });
  }, [count]);

  useEffect(() => {
    clearForm();
  }, [id]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Имя
          <input
            name="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: actionNames.setName, payload: e.target.value })
            }
            value={formValue.name}
          />
        </label>
      </div>
      <div>
        <label>
          Текст отзыва
          <textarea
            name="text"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              dispatch({ type: actionNames.setText, payload: e.target.value })
            }
            value={formValue.text}
          />
        </label>
      </div>
      <div>
        <label>
          Рейтинг
          <Counter count={count} increment={increment} decrement={decrement} />
        </label>
      </div>
      <button type="submit">ОК</button>
    </form>
  );
};
