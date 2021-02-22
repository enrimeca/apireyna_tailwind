import React from 'react';
import Nav from './elements/Nav/index.jsx';
import Header from './components/Header/index';
import Main from './components/Main/index';
import options from './data/menu.json';
import headerData from './data/header.json';
import mainProducts from './data/products.json'

function App() {
  return (
    <>
      <Nav options={options.items} color={'yellow'}/>
      <Header title={headerData.title} company={headerData.company} resume={headerData.resume} />
      <Main products={mainProducts.products} />
    </>
  );
}

export default App;
