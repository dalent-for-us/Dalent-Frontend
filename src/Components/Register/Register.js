import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 
import './Register.css';
import DalentLetter from '../../Images/DalentLetter.png';
import DalentLogo from '../../Images/DalentLogo.png';
import cookie from 'react-cookies';
import axios from 'axios';

function Register() {
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const RegisterPost = () => {
        console.log(nickname, email, password, passwordRepeat)
        axios.post("http://3.34.0.219/users", {
            id:email,
            password:password,
            nickname: nickname
        }).then(response => {
            window.location.href = "/";
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    }
    return (
        <div class="login">  
            <div class="login-left">
                <div class="login-left-items">
                    <img class="dalent-logo" src={DalentLogo}/>
                    <img class="dalent-letter" src={DalentLetter}/>
                </div>
            </div>
            <div class="login-right">
                <div class="login-right-title">회원가입</div>
                <div class="login-right-inputs">
                    <div class="login-right-input">
                        <input onChange={(e) => setNickname(e.target.value)} placeholder="닉네임" type="text"/>
                        <div class="login-right-input-line"></div>
                    </div>
                    <div class="login-right-input">
                        <input onChange={(e) => setEmail(e.target.value)} placeholder="이메일" type="text"/>
                        <div class="login-right-input-line"></div>
                    </div>
                    <div class="login-right-input">
                        <input onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" type="password"/>
                        <div class="login-right-input-line"></div>
                    </div>
                    <div class="login-right-input">
                        <input onChange={(e) => setPasswordRepeat(e.target.value)} placeholder="비밀번호 확인" type="password"/>
                        <div class="login-right-input-line"></div>
                    </div>
                </div>
                <div class="login-right-buttons">
                    <div class="login-right-button">
                        <input onClick={RegisterPost} type="button" value="회원가입"/>
                    </div>
                    <div class="login-right-button-register">
                        <Link to="/login"><div>로그인</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;