import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import Navbar from './Navbar';
import Card from './Card';
import Carousel from './Carousel';
import './app.css';

function App (){
    return(
        <>
        <div className="anything">
            <Navbar />
            <Carousel />
            <div className="anything2">
            <Card para="hello world"/>
            <Card para="sanchit"/>
            <Card para="rajat"/>
            </div>
        </div>
        </>
    );
}

export default App;
