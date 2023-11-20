import { TRewiew } from '../../types';

export const Review = ({ review }: { review: TRewiew }) => {
  return <div>{review.text}</div>;
};
