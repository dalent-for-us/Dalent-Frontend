import React from 'react';
import './RankingList.css';
import Ranker from '../../../Images/ranker.png';
import Star from '../../../Images/star.png';

function RankingList() {
    return(
        <div class="ranking-list">
            <div class="ranking-item">
                {/*디자인*/}
                <div class="ranking-category">디자인</div>
                <div class="ranking-table">
                    <div class="ranking-table-container">
                        <div class="ranker">
                            <div class="ranker-profile"><img src={Ranker}/></div>
                            <div class="ranker-info">
                                <div class="ranker-name">Sun_Gun</div>
                                <div class="ranker-raiting">
                                    <img src={Star}/>
                                    <div class="raiting-score">999</div>
                                </div>
                            </div>
                            <div class="ranker-tag">Top</div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*2등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">2</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*3등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">3</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*4등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">4</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*5등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">5</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*6등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">6</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="ranking-item">
                {/*음악*/}
                <div class="ranking-category">음악</div>
                <div class="ranking-table">
                    <div class="ranking-table-container">
                        <div class="ranker">
                            <div class="ranker-profile"><img src={Ranker}/></div>
                            <div class="ranker-info">
                                <div class="ranker-name">Sun_Gun</div>
                                <div class="ranker-raiting">
                                    <img src={Star}/>
                                    <div class="raiting-score">999</div>
                                </div>
                            </div>
                            <div class="ranker-tag">Top</div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*2등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">2</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*3등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">3</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*4등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">4</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*5등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">5</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*6등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">6</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ranking-item">
                {/*프로그래밍*/}
                <div class="ranking-category">프로그래밍</div>
                <div class="ranking-table">
                    <div class="ranking-table-container">
                        <div class="ranker">
                            <div class="ranker-profile"><img src={Ranker}/></div>
                            <div class="ranker-info">
                                <div class="ranker-name">Sun_Gun</div>
                                <div class="ranker-raiting">
                                    <img src={Star}/>
                                    <div class="raiting-score">999</div>
                                </div>
                            </div>
                            <div class="ranker-tag">Top</div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*2등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">2</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*3등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">3</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*4등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">4</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*5등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">5</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*6등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">6</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ranking-item">
                {/*패션*/}
                <div class="ranking-category">패션</div>
                <div class="ranking-table">
                    <div class="ranking-table-container">
                        <div class="ranker">
                            <div class="ranker-profile"><img src={Ranker}/></div>
                            <div class="ranker-info">
                                <div class="ranker-name">Sun_Gun</div>
                                <div class="ranker-raiting">
                                    <img src={Star}/>
                                    <div class="raiting-score">999</div>
                                </div>
                            </div>
                            <div class="ranker-tag">Top</div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*2등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">2</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*3등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">3</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*4등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">4</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*5등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">5</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                        <div class='ranking-line'></div>
                        {/*6등*/}
                        <div class="lower-ranker">
                            <div class="lower-ranker-place">6</div>
                            <div class="lower-ranker-name">Fun_Gun</div>
                            <div class="lower-ranker-raiting">
                                <img src={Star}/>
                                <div class="raiting-score">999</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RankingList;