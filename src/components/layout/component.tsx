import { useContext } from 'react';
import styles from './styles.module.css';
import { ThemeContext } from '../context/theme-context';

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | null;
}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <header className={styles.header}>
        <button type="button" className={styles.button}>
          Заказ
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() =>
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }
        >
          Сменить тему
        </button>
      </header>
      {children}
      <footer className={styles.footer}>
        <button type="button" className={styles.button}>
          Контакты
        </button>
      </footer>
    </>
  );
};
