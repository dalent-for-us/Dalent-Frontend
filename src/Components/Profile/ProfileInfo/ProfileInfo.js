import React, { useEffect, useState } from 'react';
import './ProfileInfo.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Background from '../../../Images/background.png';
import Profile from '../../../Images/profile.png';
import cookie from 'react-cookies';
import Star from '../../../Images/star.png';
function ProfileInfo(props) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [gallery, setGallery] = useState('');
    useEffect(() => {
        axios.get(`http://3.34.0.219/gallery/${props.userData.nickname}`)
        .then(response => setGallery(response.data.banner_image))
        axios.get(`http://3.34.0.219/follow/${props.userData.nickname}`,{
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            setIsFollowing(response.data)
        })
        .catch(err => console.log(err))
    
    }, [props, isFollowing])
    const onFollow = () => {
        axios.post(`http://988a7b2eb2e2.ngrok.io/follow`,{},{
            params: {
                target: props.userData.nickname
            },
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        })
        .then(response => {
            window.location.href = `/mypage/${props.userData.nickname}`;
            setIsFollowing(true)
        })
        .catch(err => console.log(err))
    }
    const cancleFollow = () => {
        axios.delete(`http://988a7b2eb2e2.ngrok.io/follow`,{
            params: {
                target: props.userData.nickname
            },
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        })
        .then(response => {
            window.location.href = `/mypage/${props.userData.nickname}`;
            setIsFollowing(false)
        })
        .catch(err => console.log(err))
    }
    return (
        <div class="profile-info">
            <div style={{position: "relative"}}class="profile-background">
                <img class="gallery" src={gallery}/>
                <Link to="/banneredit"><div style={{width:"80px", height:"24px", color: "#ffffff", lineHeight:"24px", backgroundColor: "black", opacity: "0.7", fontSize: "12px", textAlign:"center", position: "absolute", right:"6.9%", top: "86%"}}>배너수정</div></Link>
                <Link to="/edit"><div style={{width:"80px", height:"24px", color: "#ffffff", lineHeight:"24px", backgroundColor: "black", opacity: "0.7", fontSize: "12px", textAlign:"center", position: "absolute", right:"0", top: "86%"}}>프로필수정</div></Link>
            </div>
            <div class="profile"><img src={props.userData.profile_image}/></div>  
            <div class="profile-wrapper">
                <div class="profile-description">
                    <div class="profile-description-top">
                        <div class="profile-name">{props.userData.nickname}</div>
                        {isFollowing ? <div class="follow-button" onClick={cancleFollow}>팔로우 해제</div> : <div class="follow-button" onClick={onFollow}>팔로우</div>}
                    </div>
                    <div class="profile-intro">{props.userData.introduce}</div>
                </div>
                <div class="profile-raiting">
                    <div class="profile-raiting-items">
                        <div style={{fontSize: "20px"}}>{props.follower}</div>
                        <div style={{fontSize: "20px", fontWeight: "Bold", marginLeft: "25px"}}>팔로워</div>
                    </div>
                    <div class="profile-raiting-items">
                        <div style={{fontSize: "20px"}}>{props.following}</div>
                        <div style={{fontSize: "20px", fontWeight: "Bold", marginLeft: "25px"}}>팔로잉</div>
                    </div>
                    <div class="profile-raiting-items">
                        <div style={{fontSize: "20px"}}>{props.userData.stars}</div>
                        <div><img style={{width: "20px", height: "20px", marginLeft: "25px"}}src={Star}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;