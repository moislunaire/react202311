import { RestaurantsPage } from './pages/restaurants-page/component';
import { TRestaurant } from './types';

export const App = ({ restaurants }: { restaurants: TRestaurant[] }) => {
  return <RestaurantsPage restaurants={restaurants} />;
};
