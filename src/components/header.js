import React from "react"
import '../styles/styles.css'

class Header extends React.Component {
    render(){
        return(
            <header class="header">
                <div class="logo">
                    <img src="https://i.imgur.com/u2RjHiT.png" alt="DeMata"/>
                </div>
                <input type="checkbox"/>
                <span class="menu">
                    <span class="hamburger">
                    </span>
                </span>
                <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Profile</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Goals</a>
                </li>
                </ul>    
            </header>
        );
    }
}

export default Header;