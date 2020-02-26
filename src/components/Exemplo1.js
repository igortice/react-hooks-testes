import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../store/ducks/exemploDuck';

const Exemplo1 = () => {
  const clicks = useSelector(state => state.exemplo.um.clicks);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = `Counter: ${clicks}`;
  }, [clicks]);

  return (
    <div>
      <p>You clicked {clicks} times</p>
      <button onClick={() => dispatch(Creators.fetchClicks(clicks + 1))}>
        Click me
      </button>
    </div>
  );
};

export default Exemplo1;
