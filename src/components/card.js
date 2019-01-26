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
                        <strong className="card-title">About Me</strong> <br></br><br></br>
                    </p>
                    <p className="paragraph" id="description">
                        I'm a technology lover since I was a little kid and a <b> passionate learner </b>, 
                        as I like to <b>read </b> and <b>discover </b> new things everyday.
                    </p>
                    <img src={'assets/personal_pic.png'} className="profile-pic" />
                    {/* <p className="paragraph" style={{marginLeft: 'auto', marginRight: 'auto'}}>                    
                        I always try to understand everything that's around me and I'm always looking for ways to <b>improve </b> 
                        the quality and effectiveness of every small thing that surrounds me. <br/> <br/>
                        Created some <b>innovative </b> projects on social media, and will keep trying to make something <b>different </b> 
                        and <b>memorable </b> in every project. <br/> <br/>
                    </p> */}
                </div>
                <button className="bt-downloadCV">
                    Download CV
                </button>
            </div>
        );
    }
}