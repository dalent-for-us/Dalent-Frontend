import React, { useState } from 'react';
import './WorkPost.css';
import axios from 'axios';
import cookie from 'react-cookies';

function WorkPost() {
    const [category, setCategory] = useState('ART');
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] =  useState('');
    const [work, setWork] =  useState('');
    const [mediaType, setMediaType] =  useState('image');
    const [content, setContent] =  useState('');
    const onPost = () => {
        axios.post("http://3.34.0.219:8080/works", {
            category: category,
            title: title,
            content: content,
            media_type: mediaType,
            media_link: work,
            thumbnail_link: thumbnail
        }, {
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        })
        .then(response => {
            window.location.href="/";
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const onThumbnailImage = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        axios.post("http://3.34.0.219:8080/media/files", formData)
        .then(response => {
            alert('업로드 완료');
            setThumbnail(response.data.file_link)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const onWork = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        axios.post("http://3.34.0.219:8080/media/files", formData)
        .then(response => {
            alert('업로드 완료');
            setWork(response.data.file_link)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <>
            <div class="work-post">
                <div class="work-post-container">
                    <div class="work-post-title">작품등록</div>
                    <form>
                        <div class="work-post-input-items">
                            <div class="work-post-input-item">
                                <div class="work-post-input-text">카테고리</div>
                                <select onChange={(e) => setCategory(e.target.value)} class="work-post-select">
                                    <option value="ART">ART</option>
                                    <option value="MUSIC">MUSIC</option>
                                    <option value="FASHION">FASHION</option>
                                    <option value="PROGRAMMING">PROGRAMMING</option>
                                </select>
                            </div>
                            <div class="work-post-input-item">
                                <div class="work-post-input-text">파일형식</div>
                                <select onChange={(e) => setMediaType(e.target.value)} class="work-post-select">
                                    <option value="image">image</option>
                                    <option value="audio">audio</option>
                                </select>
                            </div>
                            <div class="work-post-input-item">
                                <div  class="work-post-input-text">제목</div>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" class="work-post-input"/>
                            </div>
                            <div class="work-post-input-item">
                                <div  class="work-post-input-text">썸네일</div>
                                <input onChange={(e) => onThumbnailImage(e)} class="input-file" type="file" id="ex_file"/>
                            </div>
                            <div class="work-post-input-item">
                                <div class="work-post-input-text">작품</div>
                                <input onChange={(e) => onWork(e)} class="input-file" type="file" id="ex_file"/>
                            </div>
                            <div class="work-post-input-item top">
                                <div class="work-post-input-text">작품소개</div>
                                <textarea onChange={(e) => setContent(e.target.value)}  class="input-textarea"/>
                            </div>
                        </div>
                    </form>
                    <div class="work-post-button">
                        <div onClick={onPost} class="add-work post">작품등록</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkPost;