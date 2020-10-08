import React, { useState } from 'react';
import './tailwind.output.css';
import './App.css';
import Terminal from './components/Terminal';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contacts from './components/Contacts';

function App() {
  const [section, setSection] = useState(window.location.toString().split('#')[1] ? window.location.toString().split('#')[1] : "skills");

  return (
    <div className="App bg-gray-200">
      <header className="h-screen pt-5 bg-prussian-blue-600">
        <div className="absolute flex justify-between top-0 right-0 mt-5 mr-5 text-sm text-white">
          <button className="underline mr-3 hover:no-underline">
            <a href="#whoami">
              whoami
            </a>
          </button>
          <button className="underline hover:no-underline">
            <a href="/blog">
              blog
            </a>
          </button>
        </div>
        <Terminal />
        <button className="absolute bottom-0 mb-5 text-center w-64 left-0 right-0 ml-auto mr-auto h-10 text-sm items-center text-white">
          <a href="#skills">_ view more</a>
        </button>
      </header>
      <div className="section w-full justify-center h-full min-h-screen items-center p-5 pt-12">
        <div className="flex justify-around">
          <SectionTitle btnId="btn-skills" btnURL="#skills" btnTitle="Skills" setSection={setSection} section={section}/>
          <SectionTitle btnId="btn-timeline" btnURL="#timeline" btnTitle="Timeline" setSection={setSection} section={section}/>
          <SectionTitle btnId="btn-projects" btnURL="#projects" btnTitle="Projects" setSection={setSection} section={section}/>
        </div>
        { section === "skills" ? <Skills /> : section === "timeline" ? <Timeline /> : "" }

        {/* Projects */}

      </div>
      <Contacts />
    </div>
  );
}

function changeSection(e, setSection){
  setSection(e.target.id.toString().split('-')[1]);
}

const SectionTitle = (props) => {
  let isActive = props.section === props.btnURL.replace('#', '') ? "active" : "";
  return <button className={"section-title text-5xl text-gray-300 m-2 " + isActive} ><a id={props.btnId} onClick={(e) => {changeSection(e, props.setSection)}} href={props.btnURL}>{props.btnTitle}</a></button>
}

export default App;