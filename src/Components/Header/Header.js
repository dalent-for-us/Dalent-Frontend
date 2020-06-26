import React from 'react';
import './Header.css';
import DalentLogo from '../../Images/dalent.png';
function Header() {
    return (
        <div class="dalent-header">
            <div class="header-container">
                <a href="#"><img class="dalent-logo" src={DalentLogo}/></a>
                <a href="/login"><div class="login-text">로그인</div></a>
            </div>
        </div>
    );
}

export default Header;