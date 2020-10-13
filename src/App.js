import React from 'react';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Cart } from './pages/Cart';

function App() {
  return (
    <>
      <Cart />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
