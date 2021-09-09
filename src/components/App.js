// import logo from '../useless/logo.svg';
import '../useless/App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';

import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Cart />
      <ShoppingList />
    </React.Fragment>
  );
}

export default App;
