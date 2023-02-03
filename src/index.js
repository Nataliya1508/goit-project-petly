import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from 'utils/extendTheme';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-project-petly">
          <ChakraProvider theme={theme}>
            <App />
            <ToastContainer />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
