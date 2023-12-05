import { Button } from '../button/component';
import { ThemeProvider } from '../contexts/theme/component';
import { useTheme } from '../contexts/theme/hooks';
import styles from './styles.module.css';

export const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <ThemeProvider>
      <header className={styles.header}>
        <Button type="button" className={styles.button}>
          Заказ
        </Button>
        <Button type="button" className={styles.button} onClick={toggleTheme}>
          Сменить тему
        </Button>
      </header>
    </ThemeProvider>
  );
};
