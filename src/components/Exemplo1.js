import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCount } from '../store/actions/exemploAction';

const Exemplo1 = () => {
  const count = useSelector(state => state.exemplo.um.count);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = `Counter: ${count}`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => dispatch(setCount(count + 1))}>Click me</button>
    </div>
  );
};

export default Exemplo1;

// import React, { useState, useEffect } from 'react';

// const Exemplo1 = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `Counter: ${count}`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// };

// export default Exemplo1;
