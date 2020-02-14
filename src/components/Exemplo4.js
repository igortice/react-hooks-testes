import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const clicks = useSelector(state => state.exemplo.um.clicks);
  const tarefas = useSelector(state => state.exemplo.dois.tarefas);
  const count = useSelector(state => state.exemplo.tres.count);
  const quantidade = useSelector(state => state.exemplo.cinco.projetos.length);

  return (
    <div>
      <div>clicks: {clicks}</div>
      <pre>tarefas: [{tarefas.join(', ')}]</pre>
      <div>count: {count}</div>
      <div>quantidade github: {quantidade || 'carregando...'}</div>
    </div>
  );
};
