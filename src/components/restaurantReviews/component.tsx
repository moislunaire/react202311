import { TRewiew } from '../../types';

export const RestaurantReviews = ({
  restaurantReviews,
}: {
  restaurantReviews: TRewiew[];
}) => {
  return (
    <div>
      <h3>Отзывы:</h3>
      <ul>
        {restaurantReviews.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  );
};
