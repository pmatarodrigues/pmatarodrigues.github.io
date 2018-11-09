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

                </Parallax.Layer>
            </div>
        );
    }
}
