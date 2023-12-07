import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/features/entities/review/selectors';
import { TState } from '../../store/types';
import styles from './styles.module.css';

export const Review = ({ reviewId }: { reviewId: string }) => {
  const review = useSelector((state: TState) =>
    selectReviewById(state, reviewId)
  );
  return <div className={styles.review}>{review.text}</div>;
};
