import React from "react"
import '../styles/styles.css'
import '../styles/cardStyles.css'
import { Parallax } from "react-spring"


export default class Card extends React.Component {
    render(){
        return(
            <div>
                <div className="card-background">
                    {/* ABOUT ME CARD BOX */}
                    <br></br>
                    <p className="paragraph" id="title" >
                        <strong className="card-title">Pedro Mata Rodrigues</strong> <br></br><br></br>
                    </p>
                    <p className="paragraph" id="description">
                        I've been a <b>technology lover</b> for a long time, since I was a little kid, when MySpace, mIRC and MSN were still a thing.<br></br>
                        <br></br>
                        I like to keep <b>challenging</b> myself, to <b>try new things</b> everyday as that's how we can <b>improve</b> and get <b>better</b> in everything we do. <br></br>                         
                        <br></br>
                        If you have any question, recommendation or just wanna talk hit me up on any of the links below:
                        <br></br>
                        <a href="https://www.linkedin.com/in/pmatarodrigues" target="_blank">
                            <img src={'assets/logos/linkedin.png'} style={{marginLeft: '30%'}} className="logos"/>
                        </a>
                        <a href="https://www.twitter.com/astrolopitech" target="_blank">
                            <img src={'assets/logos/twitter.png'} className="logos"/>
                        </a>
                        <a href="https://www.github.com/pmatarodrigues" target="_blank">
                            <img src={'assets/logos/github.png'} className="logos"/>
                        </a>
                        <a href="mailto:pmatarodrigues@pm.me" target="_blank">
                            <img src={'assets/logos/mail.png'} className="logos"/>
                        </a>
                    </p>


                    <img src={'assets/personal_pic.png'} className="profile-pic" />                    
                </div>
                <button className="bt-downloadCV">
                    Download CV
                </button>
            </div>
        );
    }
}