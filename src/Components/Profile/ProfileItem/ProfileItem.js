//1050 1080
import React from 'react';
import Post from '../../../Images/post.png';

import './ProfileItem.css';
const ProfileItem = () => {
    return (
        <div class="profile-items">
            <div class="profile-item">
                <div class="profile-item-title">
                    디자인
                    <a href="#"><div class="profile-item-search">전체보기</div></a>
                </div>
                <div class="profile-item-list">
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                </div>
            </div>
            <div class="profile-item">
            <div class="profile-item-title">
                    프로그래밍
                    <a href="#"><div class="profile-item-search">전체보기</div></a>
                </div>
                <div class="profile-item-list">
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                </div>
            </div>
            <div class="profile-item">
            <div class="profile-item-title">
                    음악
                    <a href="#"><div class="profile-item-search">전체보기</div></a>
                </div>
                <div class="profile-item-list">
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                </div>
            </div>
            <div class="profile-item">
            <div class="profile-item-title">
                    패션
                    <a href="#"><div class="profile-item-search">전체보기</div></a>
                </div>
                <div class="profile-item-list">
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                    <img class="profile-item-img" src={Post}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileItem;