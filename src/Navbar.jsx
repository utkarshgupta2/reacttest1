import react from 'react';
import './navbar.css';
import Button from '@mui/material/Button';


const Navbar=()=>{
    return(
        <>
        <nav className='navba'>
            <ul className='list'>
                <li className='leftli1'>
                    <a href="/"><img className='anchorimg' src='https://picsum.photos/45/45'/></a>
                </li>
                <li className='leftli'>
                    <a className='anchortext1' href="/">HOME</a>
                </li>
                <li className='leftli'>
                    <a className='anchortext2' href="/">CONTACT US</a>
                </li>
                <li className='searchli'>
                    <input className='searchtext1' type='text' name='search' placeholder='SEARCH'/>
                </li>
                <li className='rightli'>
                    <a className='anchortext3' href="/">LOGIN</a>
                </li>
            </ul>
        </nav>
        </>

        );
}

export default Navbar;