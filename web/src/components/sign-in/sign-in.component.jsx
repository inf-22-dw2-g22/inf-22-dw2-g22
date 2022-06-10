import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import './sign-in.styles.scss';


export default function SignIn() {
    
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [apiKey, setApiKey] = useState("");
    const navigate = useNavigate()

    
    const handleSubmit = async () => {
        await Axios.post("http://localhost:3305/users",{
            username: username,
            password: password,
            apiKey: apiKey
        }).then((res) => {
             console.log('teste');
             navigate('../../home');
            /*if(res.data.authenticated === true){
            }else{
                console.log("nao aceito");
            }*/
        });
        /*
        }).then((res) => {
            if(res.data.authenticated){
                history.push("/home");
            }else{
                console.log("nao aceito");
            }
        }); */
    };

    const teste = async() =>{
        navigate('../../home');
    }

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
                <label className="custom-field two">
                    <input 
                        name='apiKey' 
                        type='text' 
                        value={apiKey} 
                        onChange={(e) => setApiKey(e.target.value)}
                        label="apiKey"
                        className='custom-field two'
                        placeholder="&nbsp;"
                        required 
                    />
                    <span className="placeholder">ApiKey</span>
                </label>
                <button type="submit"  onClick={teste} className='grayscale-decrease'>SIGN IN</button>
             
            </form>
        </div>
    );
    
}
