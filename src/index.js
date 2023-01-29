import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from 'utils/extendTheme';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-project-petly">
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
