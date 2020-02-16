import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTarefas } from '../store/actions/exemploAction';

const Lista = ({ tarefas, onClick }) => {
  const lista = tarefas.map((t, i) => (
    <li key={i}>
      {t} | <button onClick={() => onClick(t)}>x</button>
    </li>
  ));

  return lista.length ? <ol>{lista}</ol> : 'Sem tarefas cadastradas';
};

const Exemplo2 = () => {
  const [inputValue, setInputValue] = useState('');
  // const [tarefas, setTarefas] = useState([]);
  const tarefas = useSelector(state => state.exemplo.dois.tarefas);
  const dispatch = useDispatch();
  const handleClickButton = () => {
    if (inputValue) {
      dispatch(setTarefas([...tarefas, inputValue]));
      setInputValue('');
    }
  };

  const handleRemove = val => {
    var array = [...tarefas];
    var index = array.indexOf(val);
    if (index !== -1) {
      array.splice(index, 1);
      dispatch(setTarefas(array));
    }
  };

  return (
    <div>
      <Lista tarefas={tarefas} onClick={handleRemove} />

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

export default Exemplo2;
