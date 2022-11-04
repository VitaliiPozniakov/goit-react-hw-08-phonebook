import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <BrowserRouter basename="/goit-react-hw-08-phonebook/">
   <PersistGate loading={<Loader />} persistor={persistor}>
   <App />
   </PersistGate>
   </BrowserRouter>

    </Provider>
  </React.StrictMode>
);
