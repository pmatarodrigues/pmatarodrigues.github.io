import React from "react";
import '../styles/styles.css';
import Header from '../components/header';
import Paralax from '../components/parallax';
import Card from "../components/card";
import TechnicalSkills from "../components/techSkills";
import LanguageSkills from "../components/langSkills";


export default () => (
    <div>
        <Header />

        {/* ABOUT ME CARD BOX */}
        <Card/>

        {/* Technical Skills */}
        <TechnicalSkills/>

        {/* Language Skills */}
        <LanguageSkills />

    
    </div>
)
