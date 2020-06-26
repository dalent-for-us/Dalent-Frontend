import React from 'react';
import './RankingContainer.css';
import RankingList from '../RankingList/RankingList';

function RankingContainer() {
    return (
        <div class="ranking-container">
            <div class="ranking-title">랭킹</div>
            <RankingList/>
        </div>
    );
}

export default RankingContainer;