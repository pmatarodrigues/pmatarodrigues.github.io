import React from "react"
import '../styles/styles.css'
import '../styles/cardStyles.css'
import { Parallax } from "react-spring"


export default class Card extends React.Component {
    render(){
        return(
            <div>
                {/* ABOUT ME CARD BOX */}
                <Parallax.Layer offset={1.45} speed={0.2} style={{fontSize: '80px', marginLeft: '-5%'}}>
                    <strong>About Me</strong>
                </Parallax.Layer>
                <Parallax.Layer offset={1.3}
                    speed={0.5}>
                    <img src={'https://image.ibb.co/bAgr6z/personal_pic.png'} 
                    style={{ width: '15%', borderRadius: '10px', marginLeft: '55%', boxShadow: '0px 10px 70px -20px #E0E0E0' }} />
                </Parallax.Layer>
                <Parallax.Layer offset={1.2}
                    speed={0.2}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{   display: 'grid', alignItems: 'center', justifyContent: 'center', marginLeft: '25%', width: '60%'}}>
                        <p class="paragraph">
                        I'm a technology lover since I was a little kid and a passionate learner, 
                        as I like to read and discover new things everyday. <br/> <br/>
                        I always try to understand everything that's around me and I'm always looking for ways to improve 
                        the quality and effectiveness of every small thing that surrounds me. <br/> <br/>
                        Created some innovative projects on social media, and will keep trying to make something different 
                        and memorable in every project. <br/> <br/>
                        </p>
                </Parallax.Layer>
                <Parallax.Layer offset={1.90} speed={0.05}>
                    <button class="bt-downloadCV">
                        Download CV
                    </button>
                </Parallax.Layer>
            </div>
        );
    }
}