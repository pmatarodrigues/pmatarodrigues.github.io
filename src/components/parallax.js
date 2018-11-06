import React from "react"
import '../styles/styles.css'
import Header from "../components/header"
import { Parallax } from "react-spring"
import Card from "./card";
import TechnicalSkills from "./techSkills";


class Paralax extends React.Component {
    render(){
        return(
        <div>
        {/* CARTOON TOP */}
            <Parallax ref={ref => (this.parallax = ref)} pages={5}>
                <Parallax.Layer offset={0.9} speed={0.3} style={{ backgroundColor: '#FFF' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#2EDBC1'}} />
                
                <Parallax.Layer offset={0} speed={0}>
                    <img height="800" src="https://i.imgur.com/bl6uCTc.png" alt="DeMata"/>
                </Parallax.Layer>
                <Parallax.Layer offset={1.3} speed={0}>
                    <div class="cardPresentation">
                    </div>
                </Parallax.Layer>

        {/* ABOUT ME CARD BOX */}
            <Card/>

        {/* Technical Skills */}
            <TechnicalSkills/>
            
            </Parallax>
        </div>
        );
    }
}

export default Paralax;