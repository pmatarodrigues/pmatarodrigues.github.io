import React from "react"
import '../styles/styles.css'
import '../styles/skillsStyles.css'
import { Parallax } from "react-spring"


export default class TechnicalSkills extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            java: 50,
            javascript: 60,
            photoshop: 80
        }
    }


    render(){
        return(
            <div>
                {/* ABOUT ME CARD BOX */}
                <Parallax.Layer offset={2} speed={0.5} style={{fontSize: '80px'}}>
                    <div class="skill-box">
                    </div>
                    <h4 class="skill-text" style={{marginRight:'55%'}} >Java</h4>
                </Parallax.Layer>
                <Parallax.Layer offset={2.0} speed={0.8} style={{fontSize: '30px', marginRight:'90%'}}>
                    <strong>
                        Technical Skills
                    </strong>
                    <div class="skill-level">
                        Java
                    </div>
                    <SkillBar percentage={this.state.java}/>
                    <SkillBar percentage={this.state.javascript}/>
                    <SkillBar percentage={this.state.photoshop}/>

                </Parallax.Layer>
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
    return <div className="skill-fill" style={{width: `${props.percentage}%` }} />
}