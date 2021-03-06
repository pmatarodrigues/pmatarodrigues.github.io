import React, { useEffect, useState } from 'react';
import '../tailwind.output.css';
import { C, Javascript, Python, Java, Csharp, Csswizardry } from '@icons-pack/react-simple-icons';
import axios from 'axios';
import { Terminal } from 'heroicons-react';


function Projects() {
  const [githubProjects, setGithubProjects] = useState([]);

  async function onLoad() {
    try {
      const gettingGithubProjects = await getGithubProjects();
      setGithubProjects(gettingGithubProjects)
    } catch (e) {
      console.log("error");
    }
  }

  useEffect(() => {
    onLoad();
  }, [])




  // get projects from github
  // only projects I own
  // --> TODO: don't fetch forks
  function getGithubProjects(){
    return axios.get('https://api.github.com/users/pmatarodrigues/repos?type=owner', {
      'headers': {
        'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
    .then(res => res.data)
    .catch(error => console.log(error))
  }

  const SkillElement = (props) => {
    var Element;

    switch(props.Element){
      case "Python":
        Element = Python
        break;
      case "Shell":
        Element = Terminal
        break;
      case "C":
        Element = C
        break;
      case "C#":
        Element = Csharp
        break;
      case "CSS":
        Element = Csswizardry
        break;
      case "Javascript":
        Element = Javascript
        break;
      case "Java":
        Element = Java
        break;
      case "Processing":
        Element = Javascript
        break;
      default: Element = Python
        break;
    }

    return <Element className="top-0 left-0 text-green-500 self-start" />
  }


  return (
    <div id="timeline" className="p-10 max-w-2xl mx-auto justify-center sm:max-w-6xl">
      <div className="flex flex-col overflow-scroll overflow-y-hidden sm:flex-row">
          { githubProjects &&
          githubProjects.filter((project, key) => {
            {/* Filter is used to skip forked projects */}
            if(project.fork) return false;
            return true;
          })
          // .sort(({date: previousDate, date: currentDate}) => previousDate - currentDate
          .map((project, key) => {
            return (
              <a className="my-2 sm:my-0 sm:w-64" id={key} href={project.html_url}>
                <div className="p-8 mx-0 sm:mx-6 sm:px-20 bg-white h-full w-full shadow-xl rounded-md max-w-2xl text-left">
                  <SkillElement Element={project.language} />
                  <div className="text-left text-sm py-3 font-black capitalize">
                    {project.name}
                  </div>
                  <div className="text-left text-xs font-thin">
                    {project.description}
                  </div>
                </div>
              </a>
            )
          })}
      </div>
    </div>
  );
}


export default Projects;
