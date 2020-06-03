import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {calculate} from '../../../store/counter';

const Home: React.FC = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="p-counter">
      <button
        onClick={() => {
          dispatch(calculate({plusCount: 1}));
        }}
      >
        +1
      </button>
      <span style={{margin: 10}}>count: {count}</span>
      <button
        onClick={() => {
          dispatch(calculate({plusCount: -1}));
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Home;
