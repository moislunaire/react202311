import { TMenu } from '../../types';

export const RestaurantMenu = ({
  restaurantMenus,
}: {
  restaurantMenus: TMenu[];
}) => {
  return (
    <div>
      <h3>Меню:</h3>
      <ul>
        {restaurantMenus.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
