import { RestaurantsPage } from './pages/restaurants-page/component';
import { TRestaurant } from './types';
import './styles.css';
import { ThemeProvider } from './components/context/theme-context';

export const App = ({ restaurants }: { restaurants: TRestaurant[] }) => {
  return (
    <ThemeProvider>
      <RestaurantsPage restaurants={restaurants} />
    </ThemeProvider>
  );
};
