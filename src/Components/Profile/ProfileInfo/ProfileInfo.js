import React from 'react';
import './ProfileInfo.css';
import Background from '../../../Images/background.png';
import Profile from '../../../Images/profile.png';
import Star from '../../../Images/star.png';
function ProfileInfo() {
    return (
        <div class="profile-info">
            <div style={{position: "relative"}}class="profile-background">
                <img src={Background}/>
                <a href="#"><div style={{width:"80px", height:"24px", color: "#ffffff", lineHeight:"24px", backgroundColor: "black", opacity: "0.7", fontSize: "12px", textAlign:"center", position: "absolute", right:"0", top: "85%"}}>프로필수정</div></a>
            </div>
            <div class="profile"><img src={Profile}/></div>  
            <div class="profile-wrapper">
                <div class="profile-description">
                    <div class="profile-name">Sun_Gun</div>
                    <div class="profile-intro">시기 다른 랩퍼들의 반대편을 바라보던 랩퍼들의 배포 그건 백프로 개뻥 뭐든
                    개빨어 마치 텐프로 됐어 보인 각본 짜인 대본 텐션을 up을 해 해야지 제대로</div>
                </div>
                <div class="profile-raiting">
                    <div class="profile-raiting-items">
                        <div style={{fontSize: "20px"}}>2000</div>
                        <div style={{fontSize: "20px", fontWeight: "Bold", marginLeft: "25px"}}>팔로워</div>
                    </div>
                    <div class="profile-raiting-items">
                        <div style={{fontSize: "20px"}}>2만</div>
                        <div style={{fontSize: "20px", fontWeight: "Bold", marginLeft: "25px"}}>팔로잉</div>
                    </div>
                    <div class="profile-raiting-items">
                        <div style={{fontSize: "20px"}}>9999</div>
                        <div><img style={{width: "20px", height: "20px", marginLeft: "25px"}}src={Star}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;