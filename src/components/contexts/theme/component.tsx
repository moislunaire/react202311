import { ReactNode, createContext, useCallback, useState } from 'react';
import { TTheme } from '../../../types';

export const ThemeContext = createContext<{
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}>({
  theme: 'light',
  toggleTheme: () => 'light',
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>('light');

  const toggleTheme = useCallback(
    () =>
      setTheme((prevTheme: TTheme) =>
        prevTheme === 'dark' ? 'light' : 'dark'
      ),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
