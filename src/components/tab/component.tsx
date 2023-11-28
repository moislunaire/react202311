import { TRestaurant } from '../../types';
import styles from './styles.module.css';

export const Tab = ({
  title,
  onClick,
}: {
  title: TRestaurant['name'];
  onClick: () => void;
}) => {
  return (
    <button className={styles.tab} onClick={onClick}>
      {title}
    </button>
  );
};
