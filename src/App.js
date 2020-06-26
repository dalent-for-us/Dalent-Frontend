import React from 'react';
import { Home, MyPage } from './Pages';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route exact path="/mypage" component={MyPage}/>
    </>
  );
}

export default App;
