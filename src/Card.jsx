import React from "react";
import './card.css';

const Card = (props) =>{
    return (
        <div className="container">
        <a href="https://www.youtube.com/watch?v=0yn7irrHzM8&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ&index=2&t=504s&ab_channel=ApnaCollege" target='_'>
        <img className="cardimg" src="https://picsum.photos/200/200"/>
        </a>
        <p>{props.para}</p>
        </div>
    );
}

export default Card;