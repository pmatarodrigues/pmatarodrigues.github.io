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

  var iconColor = "#000";

  return(
    <div className="p-8 bg-white shadow-sm rounded-lg">
      <h2 className="text-gray-600">Technical</h2>
      <div>
        <h1 className="flex"><Python title="Python" size={15} className="mr-2 text-gray-500" /> Python</h1>
        <h1 className="flex"><Java size={15} className="mr-2 text-gray-500"/> Java</h1>
        <h1 className="flex"><Javascript size={15} className="mr-2 text-gray-500"/> Java</h1>
        <h1 className="flex"><C size={15} className="mr-2 text-gray-500"/> C</h1>
        <h1 className="flex"><Mysql size={15} className="mr-2 text-gray-500"/> SQL</h1>
        <h1 className="flex"><NodeDotJs size={15} className="mr-2 text-gray-500"/> NodeJS</h1>
        <h1 className="flex"><Git size={15} className="mr-2 text-gray-500"/> Git</h1>
        <h1 className="flex"><ReactJs size={15} className="mr-2 text-gray-500"/> ReactJS</h1>
        <h1 className="flex"><Adobephotoshop size={15} className="mr-2 text-gray-500"/> Photoshop</h1>
        <h1 className="flex"><Adobeillustrator size={15} className="mr-2 text-gray-500"/> Illustrator</h1>
      </div>
    </div>
  );

}

export function LangSkills(){
  return(
    <div className="p-8 mt-10 bg-white shadow-xm rounded-lg">
      <h2 className="text-gray-600">Language</h2>
      <div className="text-left">
        <h4>Portuguese</h4>
        <h4>English</h4>
      </div>
    </div>
  );
}

export default Skills;
