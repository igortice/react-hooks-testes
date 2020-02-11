import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCount } from '../store/actions/exemploAction';

const initialCount = 0;

const Exemplo3 = () => {
  // const [count, setCount] = useState(initialCount);
  const count = useSelector(state => state.exemplo.tres.count);
  const dispatch = useDispatch();

  return (
    <>
      Count: {count}
      <button onClick={() => dispatch(setCount(initialCount))}>Reset</button>
      <button onClick={() => (count > 0) && dispatch(setCount(count - 1))}>-</button>
      <button onClick={() => dispatch(setCount(count + 1))}>+</button>
    </>
  );
};

export default Exemplo3;
