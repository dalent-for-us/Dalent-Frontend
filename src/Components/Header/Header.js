import React, {useEffect, useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import DalentLogo from '../../Images/dalent.png';
import Ranker from '../../Images/ranker.png';
import cookie from 'react-cookies';
import axios from 'axios';

function Header() {
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState({});
    const LogOut = () => {
        cookie.remove('token');
        window.location.href="/"
    }
    const linkToMyPage = {
        pathname: `/mypage/${userData.nickname}`,
        state: {
            userData: userData
        }
    }
    useEffect(() => {
        axios.get("http://3.34.0.219:8080/users/me", {
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            setIsLogin(true)
            setUserData(response.data);
        }).catch(err => {
            setIsLogin(false)
            console.log(err);
        })
    }, [])
    return (
        <div class="dalent-header">      
            <div class="header-container">
                
                <Link to="/"><img class="dalent-logo" src={DalentLogo}/></Link>

                {/*로그인 상태*/}
                <>
                    
                    { isLogin ?
                        <div class="login-wrapper">  
                            <div onClick={LogOut} class="add-work logout">로그아웃</div>
                            <Link to="/workpost"><div class="add-work">작품등록</div></Link>
                            <div class="user-info">
                                <Link to={linkToMyPage}><div class="user-name">{userData.nickname}</div></Link>
                                <Link to={linkToMyPage}><img class="user-profile" src={userData.profile_image}/></Link>
                            </div>
                            
                        </div>: 
                        
                        <Link to="/login"><div class="login-text">로그인</div></Link>
                    }
                    
                </>

                
            </div>
        </div>
    );
}

export default Header;