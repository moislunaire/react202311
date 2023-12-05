import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/features/entities/restaurant/selectors';
import styles from './styles.module.css';
import { TState } from '../../store/types';

export const Tab = ({ id, onClick }: { id: string; onClick: () => void }) => {
  const { name } = useSelector((state: TState) =>
    selectRestaurantById(state, id)
  );
  return (
    <button className={styles.tab} onClick={onClick}>
      {name}
    </button>
  );
};
