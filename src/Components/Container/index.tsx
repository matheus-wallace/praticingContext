'use client';
import { useTheme } from '@/Context/ThemeContext';
import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        width: '100wh',
        height: '100vh',
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
