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
            <div id="tech-skills" className="skill-box">
                {/* TECHNICAL SKILLS */}
                <strong class="card-title" style={{color: 'black'}}>
                    Technical Skills
                </strong>
                <br></br><br></br>
                                                
                <strong class="skill-text">Java</strong>                    
                <SkillBar percentage={this.state.java}/>
                
                <strong class="skill-text">Javascript</strong>
                <SkillBar percentage={this.state.javascript}/>

                <strong class="skill-text">C</strong>                    
                <SkillBar percentage={this.state.c}/>

                <strong class="skill-text">React Native</strong>                    
                <SkillBar percentage={this.state.reactNative}/>
                
                <strong class="skill-text">ReactJS</strong>
                <SkillBar percentage={this.state.react}/>
                
                <strong class="skill-text">SQL</strong>
                <SkillBar percentage={this.state.sql}/>
                
                <strong class="skill-text">NodeJS</strong>
                <SkillBar percentage={this.state.nodejs}/>
                
                <strong class="skill-text">GIT</strong>
                <SkillBar percentage={this.state.git}/>

                <strong class="skill-text">Photoshop</strong>
                <SkillBar percentage={this.state.photoshop}/>
                

                <strong class="skill-text">Illustrator</strong>
                <SkillBar percentage={this.state.illustrator}/>

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