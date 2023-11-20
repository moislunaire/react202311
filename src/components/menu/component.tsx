import { TMenu } from '../../types';
import { Dish } from '../dish/component';

export const Menu = ({ dishes }: { dishes: TMenu[] }) => {
  return (
    <div>
      <h3>Меню:</h3>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
