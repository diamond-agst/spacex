import React from 'react';
import './App.scss';
import Header from './components/Header';
import MainBlock from './components/MainBlock';

function App() {
  return (
    <div className="mainWrapper">
      <Header/>
      <MainBlock/>
    </div>
  );
}

export default App;
