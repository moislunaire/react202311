import { Dispatch, SetStateAction, createContext, useState } from 'react';

export const ThemeContext = createContext<{
  theme: 'dark' | 'light';
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
}>({
  theme: 'light',
  setTheme: () => 'light',
});

export const ThemeProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
