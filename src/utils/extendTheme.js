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
});

export default theme;
