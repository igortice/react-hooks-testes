import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

const initialCount = 0;

const Exemplo3 = () => {
  const count = useSelector(state => state.exemplo.tres.count);
  const dispatch = useDispatch();

  return (
    <div>
      Count: {count}
      <button
        onClick={() => dispatch({ type: 'setCount', payload: initialCount })}
      >
        Reset
      </button>
      <button
        onClick={() =>
          count > 0 && dispatch({ type: 'setCount', payload: count - 1 })
        }
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: 'setCount', payload: count + 1 })}
      >
        +
      </button>
    </div>
  );
};

export default Exemplo3;
