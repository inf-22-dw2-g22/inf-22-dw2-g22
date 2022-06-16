import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialog";

export default function Card(props){
    
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true);
    };
    return (
        <>
            <FormDialog 
                open={open} 
                setOpen={setOpen} 
                username={props.username}
                password={props.password}
                firstName={props.firstName}
                lastName={props.lastName}
                listCard={props.listCard}
                setListCard={props.setListCard}
                id={props.id}
            />
            
            <div className="card-container" onClick={()=>
            handleClickCard()}>
                <h1 className="card-title">{props.username}</h1>
                <p className="card-cost">First Name:{props.firstName}</p>
                <p className="card-category">Last Name:{props.lastName}</p>
                
            </div>
        
        </>
    );
}