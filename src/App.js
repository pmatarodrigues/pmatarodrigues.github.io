import React, { useState } from 'react';
import './tailwind.output.css';
import './App.css';
import Terminal from './components/Terminal';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contacts from './components/Contacts';
import Projects from './components/ProjectsList';
import WhoAmI from './components/WhoAmI';

function App() {
  const [section, setSection] = useState(window.location.toString().split('#')[1] ? window.location.toString().split('#')[1] : "skills");
  const [showWhoAmI, setShowWhoAmI] = useState(false)
  const [showSections, setShowSections] = useState(true)


  return (
    <div className="App bg-gray-200">
      <header className="h-screen pt-5 bg-prussian-blue-600">
        <div className="absolute flex justify-between top-0 right-0 mt-5 mr-5 text-sm text-white">
          <button className="underline mr-3 hover:no-underline" onClick={() => setShowWhoAmI(!showWhoAmI)}>
              {showWhoAmI ? "home" : "whoami"}
          </button>
          <button className="underline hover:no-underline">
            <a href="https://blog.pmatarodrigues.com">
              blog >
            </a>
          </button>
        </div>
        { !showWhoAmI ? (
          <div>
            <Terminal />
          </div>
        ) : (
          <div>
            <WhoAmI></WhoAmI>
          </div>
        )}
        <button className="absolute bottom-0 mb-5 text-center w-64 left-0 right-0 ml-auto mr-auto h-10 text-sm items-center text-white">
          <a href="#sections">_ view more</a>
        </button>
      </header>
      { showSections ? (
        <div id="sections" className="section w-full justify-center h-full min-h-screen items-center pt-12">
          <SectionTitle btnId="btn-skills" btnURL="#skills" btnTitle="Technical Skills" setSection={setSection} section={section}/>
          <Skills type="tech" />
          <SectionTitle btnId="btn-skills" btnURL="#skills" btnTitle="Language Skills" setSection={setSection} section={section}/>
          <Skills type="lang" />
          {/* <SectionTitle btnId="btn-achievements" btnURL="#achievements" btnTitle="Achievements" setSection={setSection} section={section}/> */}
          <Timeline />
          <SectionTitle btnId="btn-projects" btnURL="#projects" btnTitle="Projects" setSection={setSection} section={section} />
          <Projects />
        </div>
      ) : (
        <div>
        </div>
      )}
      <Contacts />
    </div>
  );
}

function changeSection(e, setSection){
  setSection(e.target.id.toString().split('-')[1]);
}

const SectionTitle = (props) => {
  return <button className={"section-title text-4xl sm:text-6xl text-gray-800 m-2"} ><a id={props.btnId} onClick={(e) => {changeSection(e, props.setSection)}} href={props.btnURL}>{props.btnTitle}</a></button>
}

export default App;
