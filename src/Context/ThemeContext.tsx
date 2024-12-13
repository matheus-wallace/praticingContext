'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { theme, ThemeColors, ThemeType } from '@/store/Constants';

type ThemeContextType = {
  theme: ThemeColors;
  toogleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('O contexto de tema deve ser utilizado dentro do Provider de temas.');

  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setCurrentTheme(savedTheme as keyof ThemeType);
  }, []);

  const [currentTheme, setCurrentTheme] = useState<keyof ThemeType>('dark');

  const toogleTheme = () => {
    setCurrentTheme((prevState) => {
      const newTheme = prevState == 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const value = {
    theme: theme[currentTheme],
    toogleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
