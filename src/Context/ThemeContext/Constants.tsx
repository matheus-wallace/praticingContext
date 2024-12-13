export type ThemeColors = {
  backgroundColor: string;
  color: string;
};

export type ThemeType = {
  dark: ThemeColors;
  light: ThemeColors;
};

export const theme: ThemeType = {
  dark: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },

  light: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
};
