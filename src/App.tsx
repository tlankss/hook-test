import React from 'react';
import './App.css';
import StateFn from './view/statehooks';
import EffectFn from './view/effecthooks';
import ReducerFn from './view/reducer';
import RefFn from './view/refhooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateFn></StateFn>
        <EffectFn></EffectFn>
        <ReducerFn></ReducerFn>
        <RefFn></RefFn>
      </header>
    </div>
  );
}

export default App;
