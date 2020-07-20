import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 
import './Edit.css';
import DalentLetter from '../../Images/DalentLetter.png';
import DalentLogo from '../../Images/DalentLogo.png';
import cookie from 'react-cookies';
import axios from 'axios';

function Edit() {
    const [introduce, setIntroduce] = useState("");
    const [image, setImage] = useState("");
    const onImageChange = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        axios.post("http://3.34.0.219/media/files", formData)
        .then(response => {
            alert('업로드완료')
            setImage(response.data.file_link)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const onPost = () => {
        axios.patch("http://3.34.0.219/users/me", {
            introduce: introduce,
            profile_image: image
        }, {
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            window.location.href="/";
            console.log(response)
        })
        .catch(err => console.log(err))
    }
    return (
        <div class="edit">  
            <div class="login-right-inputs">
                <div class="login-right-input">
                    <div class="edit-title">자기소개</div>
                    <input onChange={(e) => setIntroduce(e.target.value)} placeholder="자기소개" type="text"/>
                    <div class="login-right-input-line"></div>
                </div>
                <div class="login-right-input">
                    <div class="edit-title">프로필 이미지</div>
                    <input onChange={(e) => onImageChange(e)} type="file"/>
                    <div class="login-right-input-line"></div>
                </div>
                <div class="login-right-button">
                        <input onClick={onPost} type="button" value="수정"/>
                </div>
            </div>
        </div>
    );
}

export default Edit;