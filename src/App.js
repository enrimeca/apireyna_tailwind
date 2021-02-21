import React from 'react';
import Nav from './elements/Nav/index.jsx';
import options from './data/menu.json'

function App() {
  return (
    <>
      <Nav options={options.items} color={'yellow'}/>
    </>
  );
}

export default App;
