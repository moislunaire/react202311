import { TMenu } from '../../types';
import { Dish } from '../dish/component';
import styles from './styles.module.css';

export const Menu = ({ dishes }: { dishes: TMenu[] }) => {
  return (
    <div>
      <h3>Меню:</h3>
      <ul className={styles.menu}>
        {dishes.map((dish) => (
          <li key={dish.id} className={styles.dishContainer}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
