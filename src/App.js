import React from 'react';
import Nav from './elements/Nav';
import options from './data/menu.json'

function App() {
  return (
    <>
      <Nav options={options.items} />
    </>
  );
}

export default App;
