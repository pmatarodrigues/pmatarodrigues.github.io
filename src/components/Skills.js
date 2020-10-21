import { render } from '@testing-library/react';
import React from 'react';
import { Adobeillustrator, Adobephotoshop, C, Git, Javascript, Mysql, NodeDotJs, Python, Java, ReactJs } from '@icons-pack/react-simple-icons';
import '../tailwind.output.css';

function Skills() {
  return (
    <div id="skills" className="p-10 lg:px-64">
      <div className=" justify-center">
        <TechSkills />
        <LangSkills />
      </div>
    </div>
  );
}

export function TechSkills(){
  var iconColor = "text-gray-500";
  var iconSize = 40;
  return(
    <div className="p-2 sm:p-8 bg-white shadow-xl rounded-md max-w-2xl mx-auto">
      <h2 className="text-gray-600 skill-title p-2">Technical</h2>
      <div className="flex justify-center p-2 flex-wrap flex-grow-0">
        <SkillElement Element={Python} title="Python" />
        <SkillElement Element={Java} title="Java" />
        <SkillElement Element={Javascript} title="Javascript" />
        <SkillElement Element={C} title="C" />
        <SkillElement Element={Mysql} title="Mysql" />
        <SkillElement Element={NodeDotJs} title="Node.Js" />
        <SkillElement Element={Git} title="Git" />
        <SkillElement Element={ReactJs} title="ReactJs" />
        <SkillElement Element={Adobephotoshop} title="Photoshop" />
        <SkillElement Element={Adobeillustrator} title="Illustrator" />
      </div>
    </div>
  );
}

const SkillElement = (props) => {
  var iconColor = "text-gray-500";
  var iconSize = 40;
  return(
    <props.Element size={iconSize} className={"p-1 " + iconColor}/>
  )
}

export function LangSkills(){
  return(
    <div className="p-8 mt-10 bg-white shadow-xl rounded-md max-w-2xl mx-auto">
      <h2 className="text-gray-600 skill-title p-2">Language</h2>
      <div className="p-2 flex text-center justify-center">
        <div>
          <h4 className="mx-5 text-xl sm:text-2xl">Portuguese</h4>
          <p className="text-gray-500 text-xs sm:text-base">Native</p>
        </div>
        <div>
          <h4 className="mx-5 text-xl sm:text-2xl">English</h4>
          <p className="text-gray-500 text-xs sm:text-base">Professional</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
