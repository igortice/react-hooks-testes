import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const clicks = useSelector(state => state.exemplo.um.count);
  return (
    <>
      <div>clicks: {clicks}</div>
    </>
  );
};
