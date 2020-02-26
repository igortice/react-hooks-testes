import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { Creators } from '../store/ducks/exemploDuck';

const initialCount = 0;

const Exemplo3 = () => {
  const count = useSelector(state => state.exemplo.tres.count);
  const dispatch = useDispatch();

  return (
    <div>
      Count: {count}
      <button onClick={() => dispatch(Creators.fetchCounts(initialCount))}>
        Reset
      </button>
      <button
        onClick={() => count > 0 && dispatch(Creators.fetchCounts(count - 1))}
      >
        -
      </button>
      <button onClick={() => dispatch(Creators.fetchCounts(count + 1))}>
        +
      </button>
    </div>
  );
};

export default Exemplo3;
