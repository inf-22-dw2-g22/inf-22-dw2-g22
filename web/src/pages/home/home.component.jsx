import React, {useEffect} from 'react';
import Card from '../../components/cards/card';
import Axios from 'axios';
import { useState } from 'react';

export default function Home(){
    const [listUsers, setListUsers] = useState();

    useEffect(()=>{
       Axios.get("http://localhost:3305/users").then((response)=>{
        setListUsers(response.data);
       }) 
    }, [])

    return (
        <div className="home">
            <h1>Welcome</h1>
            {typeof listUsers !== "undefined" &&
            listUsers.map((value) =>{
                return <Card 
                key={value.id}
                listCard={listUsers}
                setListCard={setListUsers}
                id={value.id}
                username={value.username}
                password={value.password}
                firstName={value.firstName}
                lastName={value.lastName}
                ></Card>;
            })}
        </div>
    
    );
}