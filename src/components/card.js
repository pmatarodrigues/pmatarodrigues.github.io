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
                    <strong className="card-title">About Me</strong>
                    <img src={'https://image.ibb.co/bAgr6z/personal_pic.png'} className="profile-pic" />
                    <p className="paragraph">
                    I'm a technology lover since I was a little kid and a <b> passionate learner </b>, 
                    as I like to <b>read </b> and <b>discover </b> new things everyday. <br/> <br/>
                    I always try to understand everything that's around me and I'm always looking for ways to <b>improve </b> 
                    the quality and effectiveness of every small thing that surrounds me. <br/> <br/>
                    Created some <b>innovative </b> projects on social media, and will keep trying to make something <b>different </b> 
                    and <b>memorable </b> in every project. <br/> <br/>
                    </p>
                </div>
                <button className="bt-downloadCV">
                    Download CV
                </button>
            </div>
        );
    }
}