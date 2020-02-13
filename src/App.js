import React from 'react';
import Exemplo1 from './components/Exemplo1';
import Exemplo2 from './components/Exemplo2';
import Exemplo3 from './components/Exemplo3';
import Exemplo4 from './components/Exemplo4';
import Exemplo5 from './components/Exemplo5';

const App = () => {
  return (
    <>
      <hr />
      Exemplo 1 - hooks com effects
      <Exemplo1 />
      <hr />
      Exemplo 2 - hooks com várias functions e redux
      <Exemplo2 />
      <hr />
      Exemplo 3 - hooks with redux
      <Exemplo3 />
      <hr />
      Exemplo 4 - hooks redux useSelector
      <Exemplo4 />
      <hr />
      Exemplo 5 - hooks redux thunk
      <Exemplo5 />
      <hr />
    </>
  );
};

export default App;
