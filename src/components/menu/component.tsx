import { TMenu } from '../../types';
import { Counter } from '../counter/component';
import { Dish } from '../dish/component';

export const Menu = ({ dishes }: { dishes: TMenu[] }) => {
  return (
    <div>
      <h3>Меню:</h3>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Counter /> <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
