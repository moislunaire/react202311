import { useContext } from 'react';
import { ThemeContext } from './component';

export const useTheme = () => useContext(ThemeContext);
