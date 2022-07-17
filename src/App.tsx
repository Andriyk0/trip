import React from 'react';
import './App.scss';
import { Trip } from './component/Trip';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Trip />
    </div>
  );
};
