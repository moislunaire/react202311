import { Dish } from '../dish/component';
import styles from './styles.module.css';

export const Menu = ({ dishIds }: { dishIds: string[] }) => {
  return (
    <div>
      <h3>Меню:</h3>
      <ul className={styles.menu}>
        {dishIds.map((dishId) => (
          <li key={dishId} className={styles.dishContainer}>
            <Dish dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
