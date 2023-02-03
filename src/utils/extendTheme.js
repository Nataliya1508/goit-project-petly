import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    accent: {
      accentOrange: '#F59256',
      background: '#FDF7F2',
      black: '#111111',
      grey: '#11111199',
      darkGreyInSearchInput: '#535353',
    },
  },
  fonts: {
    heading: `'manrope', sans-serif`,
    body: `'manrope', sans-serif`,
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1280px',
  },
});

export default theme;
