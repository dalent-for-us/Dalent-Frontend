import React from 'react';
import Header from './Components/Header/Header';
import CategoryContainer from './Components/Category/CategoryContainer/CategoryContainer';
import RankingContainer from './Components/Ranking/RankingContainer/RankingContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div class="body">
        <div class="category-body">
          <CategoryContainer/>
        </div>
        <div class="ranking-body">
          <RankingContainer/>
        </div>
      </div>
    </div>
  );
}

export default App;
