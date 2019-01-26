import React from "react"
import '../styles/styles.css'
import '../styles/skillsStyles.css'
import { Parallax, ParallaxLayer } from "react-spring"


export default class LanguageSkills extends React.Component {


    render(){
        return(
            <div className="langskill-box">
                <div>
                    <strong className="card-title" style={{ fontSize:"50px", color:"white"}}>
                        Language Skills
                    </strong>
                </div>

                <div>                
                    <LangBox language="Portuguese" level="Native" flag="https://image.flaticon.com/icons/svg/206/206628.svg" />
                    <LangBox language="English" level="Full Professional / Advanced" flag="https://image.flaticon.com/icons/svg/206/206592.svg" />
                    <LangBox language="Spanish" level="Professional" flag="https://image.flaticon.com/icons/svg/206/206724.svg"/>
                </div>
            </div>
        );
    }
}


const LangBox = (props) => {
    return (
    <div class="lang-box">

        <img class="flag-lang" src={props.flag}/>

        <br></br>
        <strong class="lang-skill-title">
            {props.language}
        </strong>
        <p class="lang-skill-subtitle">
            {props.level}
        </p>

    </div>);
}