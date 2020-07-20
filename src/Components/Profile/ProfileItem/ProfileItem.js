//1050 1080
import React, {useEffect, useState} from 'react';
import Post from '../../../Images/post.png';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ProfileItem.css';
const ProfileItem = (props) => {
    const [design, setDesign] = useState({});
    const [programming, setProgramming] = useState({});
    const [music, setMusic] = useState({});
    const [fashion, setFashion] = useState({});
    useEffect(() => {
        //디자인
        axios.get(`http://3.34.0.219/works/users/${props.userData.nickname}?category=art`)
        .then(response => setDesign(response.data))
        .catch(err => console.log(err))
        //프로그래밍
        axios.get(`http://3.34.0.219/works/users/${props.userData.nickname}?category=programming`)
        .then(response => setProgramming(response.data))
        .catch(err => console.log(err))
        axios.get(`http://3.34.0.219/works/users/${props.userData.nickname}?category=fashion`)
        .then(response => setFashion(response.data))
        .catch(err => console.log(err))
        axios.get(`http://3.34.0.219/works/users/${props.userData.nickname}?category=music`)
        .then(response => setMusic(response.data))
        .catch(err => console.log(err))
    }, [props])
    return (
        <div class="profile-items">
            <div class="profile-item">
                <div class="profile-item-title">
                    디자인
                    <a href="#"><div class="profile-item-search">전체보기</div></a>
                </div>
                <div class="profile-item-list">
                    {
                        Array.from(design).map(item => {
                            return(
                                <Link key={item.work_id} to={`/viewpage?id=${item.work_id}`}><img class="profile-item-img" src={item.thumbnail_image}/></Link>
                            )
                        })
                    }
                </div>
            </div>
            <div class="profile-item">
            <div class="profile-item-title">
                    프로그래밍
                    <a href="#"><div class="profile-item-search">전체보기</div></a>
                </div>
                <div class="profile-item-list">
                    {
                        Array.from(programming).map(item => {
                            return(
                                <Link key={item.work_id} to={`/viewpage?id=${item.work_id}`}><img class="profile-item-img" src={item.thumbnail_image}/></Link>
                            )
                        })
                    }
                </div>
            </div>
            <div class="profile-item">
            <div class="profile-item-title">
                    음악
                    <a href="#"><div class="profile-item-search">전체보기</div></a>
                </div>
                <div class="profile-item-list">
                    {
                        Array.from(music).map(item => {
                            return(
                                <Link key={item.work_id} to={`/viewpage?id=${item.work_id}`}><img class="profile-item-img" src={item.thumbnail_image}/></Link>
                            )
                        })
                    }
                </div>
            </div>
            <div class="profile-item">
            <div class="profile-item-title">
                    패션
                    <a href="#"><div class="profile-item-search">전체보기</div></a>
                </div>
                <div class="profile-item-list">
                    {
                        Array.from(fashion).map(item => {
                            return(
                                <Link key={item.work_id} to={`/viewpage?id=${item.work_id}`}><img class="profile-item-img" src={item.thumbnail_image}/></Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileItem;