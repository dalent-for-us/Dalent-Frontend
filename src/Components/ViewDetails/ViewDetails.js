import React, { useEffect, useState } from 'react';
import './ViewDetails.css';
import Thumbnail from '../../Images/thumbnail.png';
import queryString from 'query-string';
import axios from 'axios';
import cookie from 'react-cookies';
import {Link} from 'react-router-dom';
import Star from '../../Images/star.png';
function ViewDetails(props) {
    const [work, setWork] = useState({});
    const query = queryString.parse(props.location.search);
    const onRecommand = () => {
        axios.post("http://3.34.0.219/stars", {
            work_id: work.work_id,
        }, {
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            window.location.href=`/viewpage?id=${work.work_id}`
            console.log(response)
        })
        .catch(err => console.log(err))
    }
    const cancleRecommand = () => {
        axios.delete(`http://3.34.0.219/stars/${work.work_id}`, {
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            window.location.href=`/viewpage?id=${work.work_id}`
            console.log(response)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get(`http://3.34.0.219/works/${query.id}`)
        .then(response => setWork(response.data))
        .catch(response => console.log(response))
        console.log(work)
    }, [])
    return (
        <div class="view-details-wrapper">
            <div class="view-details">
                <div class="view-details-description">
                    <div class="view-details-title">제목 : {work.title}</div>
                    <div class="view-details-category">카테고리 : {work.category}</div>
                    <Link to={`/mypage/${work.nickname}`}><div class="view-details-category">작성자 : {work.nickname}</div></Link>
                </div>
                <div class="view-details-thumbnail">
                    {work.category === "음악" ? <a href={work.media_link}><div onClick={cancleRecommand} class="add-work download">오디오 다운로드</div></a> : <img src={work.media_link}/>}
                </div>
                <div class="view-details-contents">
                    {work.content}
                </div>
                <div>
                    <div class="profile-raiting-items view">
                        <div style={{fontSize: "20px"}}>{work.stars}</div>
                        <div><img style={{width: "20px", height: "20px", marginLeft: "25px"}}src={Star}/></div>
                    </div>
                    <div onClick={onRecommand} class="add-work up">추천</div>
                    <div onClick={cancleRecommand} class="add-work down">추천 취소</div>
                </div>
                
            </div>
            
        </div>
    );
}

export default ViewDetails;