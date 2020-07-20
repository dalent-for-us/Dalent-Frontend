import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import DalentLetter from '../../Images/DalentLetter.png';
import DalentLogo from '../../Images/DalentLogo.png';
import cookie from 'react-cookies';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const LoginPost = () => {
        console.log(email, password)
        axios.post("http://3.34.0.219:8080/auth/login", {
            id:email,
            password:password
        }).then(response => {
            cookie.save('token', response.data.accessToken);
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
                <div class="login-right-title">로그인</div>
                <div class="login-right-inputs">
                    <div class="login-right-input">
                        <input onChange={(e) => setEmail(e.target.value)} placeholder="이메일" type="text"/>
                        <div class="login-right-input-line"></div>
                    </div>
                    <div class="login-right-input">
                        <input onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" type="password"/>
                        <div class="login-right-input-line"></div>
                    </div>
                </div>
                <div class="login-right-buttons">
                    <div class="login-right-button">
                        <input onClick={LoginPost} type="button" value="로그인"/>
                    </div>
                    <div class="login-right-button-register">
                        <Link to="/register"><div>회원가입</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;