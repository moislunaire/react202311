import { Review } from '../review/component';
import styles from './styles.module.css';

export const Reviews = ({ reviewIds }: { reviewIds: string[] }) => {
  return (
    <div>
      <h3>Отзывы:</h3>
      <ul className={styles.reviews}>
        {reviewIds.map((reviewId) => (
          <li key={reviewId} className={styles.reviewContainer}>
            <Review reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
