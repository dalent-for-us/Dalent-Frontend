import React from 'react';
import './Header.css';
import DalentLogo from '../../Images/dalent.png';
import Ranker from '../../Images/ranker.png';
function Header() {
    return (
        <div class="dalent-header">
            
            <div class="header-container">
                
                <a href="/"><img class="dalent-logo" src={DalentLogo}/></a>
                {/*비로그인 상태
                a href="/login"><div class="login-text">로그인</div></a>*/}

                {/*로그인 상태*/}
                <div class="login-wrapper">
                    <a href="#"><div class="add-work">작품등록</div></a>
                    <div class="user-info">
                        <a href="/mypage"><div class="user-name">Sun_Gun</div></a>
                        <a href="/mypage"><img class="user-profile" src={Ranker}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;