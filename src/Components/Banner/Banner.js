import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import './Banner.css';
import DalentLetter from '../../Images/DalentLetter.png';
import DalentLogo from '../../Images/DalentLogo.png';
import cookie from 'react-cookies';
import axios from 'axios';

function Banner() {
    const [image, setImage] = useState("");
    const [userData, setUserData] = useState({});
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
        axios.put(`http://3.34.0.219/gallery/${userData.nickname}`, {
            banner_image: image
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
    useEffect(() => {
        axios.get("http://3.34.0.219/users/me", {
            headers: {
                "X-Access-Token": cookie.load('token')
            }
        }).then(response => {
            setUserData(response.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div class="edit">  
            <div class="login-right-inputs">
                <div class="login-right-input">
                    <div class="edit-title">배너 이미지</div>
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

export default Banner;