'use client';

import { useTheme } from '@/Context/ThemeContext/ThemeContext';
import React from 'react';

const ToogleThemeButton = ({ children }: { children: React.ReactNode }) => {
  const { toogleTheme } = useTheme();
  return <button onClick={toogleTheme}>{children}</button>;
};

export default ToogleThemeButton;
