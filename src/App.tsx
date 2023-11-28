import { RestaurantsPage } from './pages/restaurants-page/component';
import { TRestaurant } from './types';
import './styles.css';

export const App = ({ restaurants }: { restaurants: TRestaurant[] }) => {
  return <RestaurantsPage restaurants={restaurants} />;
};
