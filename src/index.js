import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from 'utils/extendTheme';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
