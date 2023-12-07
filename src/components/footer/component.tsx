import { Button } from '../button/component';
import { ThemeProvider } from '../contexts/theme/component';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <ThemeProvider>
      <footer className={styles.footer}>
        <Button type="button" className={styles.button}>
          Контакты
        </Button>
      </footer>
    </ThemeProvider>
  );
};
