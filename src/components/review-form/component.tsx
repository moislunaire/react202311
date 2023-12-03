import {
  ChangeEvent,
  Reducer,
  SyntheticEvent,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { TFormValue, TRestaurant, TReviewFormAction } from '../../types';
import { DEFAULT_FORM_VALUE, actionNames } from '../../constants/review-form';
import { Counter } from '../counter/component';

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
  const [count, setCount] = useState<number>(1);

  const clearForm = () => {
    dispatch({ type: actionNames.setName, payload: '' });
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(formValue);
    clearForm();
  };

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
          <Counter
            count={formValue.rating}
            increment={() =>
              dispatch({
                type: actionNames.setRating,
                payload: formValue.rating + 0.5,
              })
            }
            decrement={() =>
              dispatch({
                type: actionNames.setRating,
                payload: formValue.rating - 0.5,
              })
            }
            min={1}
          />
        </label>
      </div>
      <button type="submit">ОК</button>
    </form>
  );
};
