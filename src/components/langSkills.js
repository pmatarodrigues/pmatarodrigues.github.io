import React from "react"
import '../styles/styles.css'
import '../styles/skillsStyles.css'
import { Parallax, ParallaxLayer } from "react-spring"


export default class LanguageSkills extends React.Component {


    render(){
        return(
            <div>
                <Parallax.Layer offset={2.88} speed={0.2}>
                    <strong style={{ fontSize:"50px", color:"#FFF", marginTop: '20%' }}>
                        Language Skills
                    </strong>
                </Parallax.Layer>
                {/* ABOUT ME CARD BOX */}
                <Parallax.Layer offset={2.95} speed={0.2}>
                    <div class="skill-box" style={{width: '20%', height: '40%', marginTop:'10%', margin: '0 auto', display:'inline-block'}}>
                    </div>{/**
                     */}<div class="skill-box" style={{width: '20%', height: '40%', margin: '0 auto', marginLeft:'20px', display:'inline-block'}}>
                    </div>{/**
                     */}<div class="skill-box" style={{width: '20%', height: '40%', margin: '0 auto', marginLeft:'20px', display:'inline-block'}}>
                    </div>
                </Parallax.Layer>
                <Parallax.Layer offset={2.98} speed={0.3}>
                     <img class="flag-lang" src="https://image.flaticon.com/icons/svg/206/206628.svg" style={{ marginRight:'11%' }}/>
                     <img class="flag-lang" src="https://image.flaticon.com/icons/svg/206/206592.svg" style={{ marginRight:'11%' }}/>
                     <img class="flag-lang" src="https://image.flaticon.com/icons/svg/206/206724.svg" />
                </Parallax.Layer>
            </div>
        );
    }
}
