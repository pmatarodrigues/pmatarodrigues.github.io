import React from "react"
import '../styles/styles.css'
import '../styles/skillsStyles.css'
import '../styles/cardStyles.css'
import { Parallax } from "react-spring"


export default class TechnicalSkills extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            java: 55,
            javascript: 65,            
            sql: 60,
            nodejs: 40,
            c: 70,
            git: 50,
            reactNative: 40,
            react: 30,
            photoshop: 80,
            illustrator: 70
        }
    }


    render(){
        return(
            <div className="skill-box">
                {/* TECHNICAL SKILLS */}
                <strong class="card-title" style={{color: 'black'}}>
                    Technical Skills
                </strong>
                
                <SkillBar percentage={this.state.java}/>
                <div class="skill-text">
                    Java
                </div>
                <SkillBar percentage={this.state.javascript}/>
                <div class="skill-text">
                    JavaScript
                </div>
                <SkillBar percentage={this.state.c}/>
                <div class="skill-text">
                    C
                </div>
                <SkillBar percentage={this.state.reactNative}/>
                <div class="skill-text">
                    React Native
                </div>
                <SkillBar percentage={this.state.react}/>
                <div class="skill-text">
                    ReactJS
                </div>
                <SkillBar percentage={this.state.sql}/>
                <div class="skill-text">
                    SQL
                </div>
                <SkillBar percentage={this.state.nodejs}/>
                <div class="skill-text">
                    NodeJS
                </div>
                <SkillBar percentage={this.state.git}/>
                <div class="skill-text">
                    Git
                </div>
                <SkillBar percentage={this.state.photoshop}/>
                <div class="skill-text">
                    Photoshop
                </div>
                <SkillBar percentage={this.state.illustrator}/>
                <div class="skill-text">
                    Illustrator
                </div>
            </div>
        );
    }
}

const SkillBar = (props) => {
    return (
        <div className="skill-bar">
            <Filler percentage={props.percentage}/>
        </div>
    )
}
const Filler = (props) => {

    let background;

    if(props.percentage >= 75){
        background = "#004D40";
    } else if(props.percentage >= 60){
        background = "#00796B";
    } else if(props.percentage >= 50){
        background = "#00897B"
    } else if(props.percentage >= 40){
        background = "#009688"
    } else{
        background = "#4DB6AC"
    }

    return <div className="skill-fill" style={{width: `${props.percentage}%`, background: `${background}` }} />
}