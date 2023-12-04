import { TRewiew } from '../../types';
import styles from './styles.module.css';

export const Review = ({ review }: { review: TRewiew }) => {
  return <div className={styles.review}>{review.text}</div>;
};
