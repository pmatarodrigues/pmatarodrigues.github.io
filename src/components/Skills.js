import React from 'react';
import { Adobeillustrator, Adobephotoshop, C, Git, Javascript, Mysql, NodeDotJs, Python, Java, ReactJs } from '@icons-pack/react-simple-icons';
import '../tailwind.output.css';

const Skills = (props) => {
  return (
    <div id="skills" className="p-10 lg:px-64">
      <div className=" justify-center">
        { props.type === "tech" ? <TechSkills /> : <LangSkills />}
      </div>
    </div>
  );
}

export function TechSkills(){
  return(
    <div className="p-2 sm:p-8 bg-white shadow-xl rounded-md max-w-2xl mx-auto">
      <div className="flex flex-col justify-center p-2 flex-wrap flex-grow-0 text-center">
        <SkillElement Element={Python} title="Python" value={50} />
        <SkillElement Element={Java} title="Java" value={50} />
        <SkillElement Element={Javascript} title="Javascript" value={70} />
        <SkillElement Element={C} title="C" value={30} />
        <SkillElement Element={Mysql} title="Mysql" value={70} />
        <SkillElement Element={NodeDotJs} title="Node.Js" value={60} />
        <SkillElement Element={Git} title="Git" value={60} />
        <SkillElement Element={ReactJs} title="ReactJs" value={70} />
        <SkillElement Element={Adobephotoshop} title="Photoshop" value={60} />
        <SkillElement Element={Adobeillustrator} title="Illustrator" value={60} />
      </div>
    </div>
  );
}

const SkillElement = (props) => {
  var iconColor = "text-gray-500";
  var iconSize = 40;
  return(
    <div className="flex justify-between">
      <div className="flex justify-start">
        <props.Element size={iconSize} className={"p-1 " + iconColor} />
        <p className="text-gray-600 text-xl text-left pl-10">{props.title}</p>
      </div>
      <p className={`text-gray-400 opacity-${props.value <= 50 ? 50 : props.value <= 60 ? 75 : 100}`}>{props.value}</p>
    </div>
  )
}

export function LangSkills(){
  return(
    <div className="p-8 bg-white shadow-xl rounded-md max-w-2xl mx-auto">
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
