import React from 'react';
import Header from '../Components/Header/Header';
import CategoryContainer from '../Components/Category/CategoryContainer/CategoryContainer';
import RankingContainer from '../Components/Ranking/RankingContainer/RankingContainer';

function Home() {
    return(
        <>
            <Header/>
            <div class="body">
                <div class="category-body">
                    <CategoryContainer/>
                </div>
                <div class="ranking-body">
                    <RankingContainer/>
                </div>
            </div>
        </>
    )
};

export default Home;