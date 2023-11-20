import { TRewiew } from '../../types';
import { Review } from '../review/component';

export const Reviews = ({
  restaurantReviews,
}: {
  restaurantReviews: TRewiew[];
}) => {
  return (
    <div>
      <h3>Отзывы:</h3>
      <ul>
        {restaurantReviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
