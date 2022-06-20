import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import './sign-in.styles.scss';


export default function SignIn() {
    
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        console.log('Handle submit');
        event.preventDefault();

        await Axios.post("http://localhost:3305/users",{
            username: username,
            password: password,

        }).then((res) => {
             console.log('teste', res);
             localStorage.setItem('token', res.data.token);             
        });

        const token = localStorage.getItem('token');
        await Axios.get("http://localhost:3305/auth",{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (res.data.authenticated) {
                navigate('../../home');
            }else{
                console.log('User not Authenticated');
            }
        });

    };



    return (
        <div className='sign-in'>
           <h1>SIGN IN</h1>
            <form onSubmit={handleSubmit}> 

                <label className="custom-field two">
                    <input 
                        name='username' 
                        type='text' 
                        value={username} 
                        onChange={(e) => setEmail(e.target.value)}
                        label="username"
                        className='custom-field two'
                        placeholder="&nbsp;"
                        required 
                    />
                    <span className="placeholder">Username</span>
                </label>
                <label className="custom-field two">
                    <input 
                        name='password'
                        type='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        label="password"
                        className='custom-field two'
                        placeholder="&nbsp;"
                        required 
                    />
                    <span className="placeholder">Password</span>
                </label>
                <button type="submit" className='grayscale-decrease'>SIGN IN</button>
             
            </form>
        </div>
    );
    
}
