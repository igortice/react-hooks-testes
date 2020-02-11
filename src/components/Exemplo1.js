import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setClicks } from '../store/actions/exemploAction';

const Exemplo1 = () => {
  const clicks = useSelector(state => state.exemplo.um.clicks);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = `Counter: ${clicks}`;
  });

  return (
    <div>
      <p>You clicked {clicks} times</p>
      <button onClick={() => dispatch(setClicks(clicks + 1))}>Click me</button>
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
