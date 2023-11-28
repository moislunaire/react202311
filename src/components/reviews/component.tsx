import { TRewiew } from '../../types';
import { Review } from '../review/component';
import styles from './styles.module.css';

export const Reviews = ({
  restaurantReviews,
}: {
  restaurantReviews: TRewiew[];
}) => {
  return (
    <div>
      <h3>Отзывы:</h3>
      <ul className={styles.reviews}>
        {restaurantReviews.map((review) => (
          <li key={review.id} className={styles.reviewContainer}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
