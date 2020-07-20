import React,{useState, useEffect} from 'react';
import './RankingList.css';
import Ranker from '../../../Images/ranker.png';
import Star from '../../../Images/star.png';
import axios from 'axios';

function RankingList() {
    const [artRanker, setArtRanker] = useState([
        {
            profile_image: ''
        }
    ]);
    const [fashionRanker, setFashionRanker] = useState([
        {
            profile_image: ''
        }
    ]);
    const [programming, setProgramming] = useState([
        {
            profile_image: ''
        }
    ]);
    const [music, setMusic] = useState([
        {
            profile_image: ''
        }
    ]);
    useEffect(() => {
        axios.get("http://3.34.0.219/users/ranks/art")
        .then(response => setArtRanker(response.data))
        .catch(err => console.log(err))
        axios.get("http://3.34.0.219/users/ranks/fashion")
        .then(response => setFashionRanker(response.data))
        .catch(err => console.log(err))
        axios.get("http://3.34.0.219/users/ranks/programming")
        .then(response => setProgramming(response.data))
        .catch(err => console.log(err))
        axios.get("http://3.34.0.219/users/ranks/music")
        .then(response => setMusic(response.data))
        .catch(err => console.log(err))
    })
    return(
        <div class="ranking-list">
            <div class="ranking-item">
                {/*디자인*/}
                <div class="ranking-category">디자인</div>
                <div class="ranking-table">
                    <div class="ranking-table-container">
                        <div class="ranker">
                            <div class="ranker-profile"><img src={artRanker[0] && artRanker[0].profile_image}/></div>
                            <div class="ranker-info">
                                <div class="ranker-name">{artRanker[0] && artRanker[0].nickname}</div>
                                <div class="ranker-raiting">
                                    <img src={Star}/>
                                    <div class="raiting-score">{artRanker[0] && artRanker[0].stars}</div>
                                </div>
                            </div>
                            <div class="ranker-tag">Top</div>
                        </div>
                        <div class='ranking-line'></div>
                        {
                            artRanker.map((item, index) => {
                                if(index !== 0) {
                                    return(
                                        <>
                                            <div class="lower-ranker">
                                                <div class="lower-ranker-place">{index+1}</div>
                                                <div class="lower-ranker-name">{item.nickname}</div>
                                                <div class="lower-ranker-raiting">
                                                    <img src={Star}/>
                                                    <div class="raiting-score">{item.stars}</div>
                                                </div>
                                            </div>
                                            <div class='ranking-line'></div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            
            <div class="ranking-item">
                {/*패션*/}
                <div class="ranking-category">패션</div>
                <div class="ranking-table">
                    <div class="ranking-table-container">
                        <div class="ranker">
                            <div class="ranker-profile"><img src={fashionRanker[0] && fashionRanker[0].profile_image}/></div>
                            <div class="ranker-info">
                                <div class="ranker-name">{fashionRanker[0] && fashionRanker[0].nickname}</div>
                                <div class="ranker-raiting">
                                    <img src={Star}/>
                                    <div class="raiting-score">{fashionRanker[0] && fashionRanker[0].stars}</div>
                                </div>
                            </div>
                            <div class="ranker-tag">Top</div>
                        </div>
                        <div class='ranking-line'></div>
                        {
                            fashionRanker.map((item, index) => {

                                if(index !== 0) {
                                    return(
                                        <>
                                            <div class="lower-ranker">
                                                <div class="lower-ranker-place">{index+1}</div>
                                                <div class="lower-ranker-name">{item.nickname}</div>
                                                <div class="lower-ranker-raiting">
                                                    <img src={Star}/>
                                                    <div class="raiting-score">{item.stars}</div>
                                                </div>
                                            </div>
                                            <div class='ranking-line'></div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <div class="ranking-item">
                {/*프로그래밍*/}
                <div class="ranking-category">프로그래밍</div>
                <div class="ranking-table">
                    <div class="ranking-table-container">
                        <div class="ranker">
                            <div class="ranker-profile"><img src={programming[0] && programming[0].profile_image}/></div>
                            <div class="ranker-info">
                                <div class="ranker-name">{programming[0] &&  programming[0].nickname}</div>
                                <div class="ranker-raiting">
                                    <img src={Star}/>
                                    <div class="raiting-score">{programming[0] &&  programming[0].stars}</div>
                                </div>
                            </div>
                            <div class="ranker-tag">Top</div>
                        </div>
                        <div class='ranking-line'></div>
                        {
                            programming.map((item, index) => {
                                if(index !== 0) {
                                    return(
                                        <>
                                            <div class="lower-ranker">
                                                <div class="lower-ranker-place">{index+1}</div>
                                                <div class="lower-ranker-name">{item.nickname}</div>
                                                <div class="lower-ranker-raiting">
                                                    <img src={Star}/>
                                                    <div class="raiting-score">{item.stars}</div>
                                                </div>
                                            </div>
                                            <div class='ranking-line'></div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>

            <div class="ranking-item">
                {/*음악*/}
                <div class="ranking-category">음악</div>
                <div class="ranking-table">
                    <div class="ranking-table-container">
                        <div class="ranker">
                            <div class="ranker-profile"><img src={music[0] && music[0].profile_image}/></div>
                            <div class="ranker-info">
                                <div class="ranker-name">{music[0] && music[0].nickname}</div>
                                <div class="ranker-raiting">
                                    <img src={Star}/>
                                    <div class="raiting-score">{music[0] && music[0].stars}</div>
                                </div>
                            </div>
                            <div class="ranker-tag">Top</div>
                        </div>
                        <div class='ranking-line'></div>
                        {
                            music.map((item, index) => {
                                if(index !== 0) {
                                    return(
                                        <>
                                            <div class="lower-ranker">
                                                <div class="lower-ranker-place">{index+1}</div>
                                                <div class="lower-ranker-name">{item.nickname}</div>
                                                <div class="lower-ranker-raiting">
                                                    <img src={Star}/>
                                                    <div class="raiting-score">{item.stars}</div>
                                                </div>
                                            </div>
                                            <div class='ranking-line'></div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RankingList;