import React, { useState, useEffect } from 'react';

const Exemplo1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Counter: ${count}`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

const Lista = ({ tarefas }) => {
  const lista = tarefas.map((t, i) => <li key={i}>{t}</li>);

  return lista.length ? <ol>{lista}</ol> : 'Sem tarefas cadastradas';
};

const Exemplo2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const handleClickButton = () => {
    if (inputValue) {
      setTarefas([...tarefas, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <Lista tarefas={tarefas} />

      <div>
        <input
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={handleClickButton}>Nova Tarefa</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Exemplo1 />
      <hr />
      <Exemplo2 />
    </div>
  );
};

export default App;
