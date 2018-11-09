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

                <Parallax.Layer offset={2.99} speed={0.2}>
                
                    <LangBox language="Portuguese" level="Native" flag="https://image.flaticon.com/icons/svg/206/206628.svg" />
                    <LangBox language="English" level="Full Professional / Advanced" flag="https://image.flaticon.com/icons/svg/206/206592.svg" />
                    <LangBox language="Spanish" level="Professional" flag="https://image.flaticon.com/icons/svg/206/206724.svg"/>


                </Parallax.Layer>
            </div>
        );
    }
}





const LangBox = (props) => {
    return (
    <div class="skill-box lang">

        <strong class="lang-skill-title">
        <br></br><br></br>{props.language} <br></br>
        </strong>
        <p class="lang-skill-subtitle">
            {props.level}
        </p>

        <img class="flag-lang" src={props.flag}/>

    </div>);
}