import React, { useEffect, useState } from 'react';
import '../tailwind.output.css';
import { Adobeillustrator, Adobephotoshop, C, Git, Javascript, Mysql, NodeDotJs, Python, Java, ReactJs, Shell, Csharp, Css3, Csswizardry } from '@icons-pack/react-simple-icons';
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
        'Authorization': `token 65318b425bb7fe64519a960dec220583fffdf617`
      }
    })
    .then(res => res.data)
    .catch(error => console.log(error))
  }

  const SkillElement = (props) => {
    var iconColor = "text-gray-500";
    var iconSize = 40;

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
      <div className="flex overflow-scroll overflow-y-hidden">
          { githubProjects &&
          githubProjects.filter((project, key) => {
            {/* Filter is used to skip forked projects */}
            if(project.fork) return false;
            return true;
          })
          // .sort(({date: previousDate, date: currentDate}) => previousDate - currentDate
          .map((project, key) => {
            console.log(project.updated_at)
            return (
              <a className="sm:w-64" id={key} href={project.html_url}>
                <div className="p-8 mx-6 sm:px-20 bg-white h-full w-full shadow-xl rounded-md max-w-2xl text-left">
                  <SkillElement Element={project.language} />
                  <div className="text-center text-sm py-8 font-black capitalize">
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
