import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    accent: {
      100: '#F59256',
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
