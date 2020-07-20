import React from 'react';
import { Home, MyPage, WorkPostPage, ViewPage, LoginPage, RegisterPage, EditPage, BannerPage } from './Pages';
import './App.css';
import Header from './Components/Header/Header';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/mypage" component={MyPage}/>
      <Route exact path="/mypage/:name" component={MyPage}/>
      <Route exact path="/workpost" component={WorkPostPage}/>
      <Route exact path="/viewpage" component={ViewPage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/register" component={RegisterPage}/>
      <Route exact path="/edit" component={EditPage}/>
      <Route exact path="/banneredit" component={BannerPage}/>
    </>
  );
}

export default App;
