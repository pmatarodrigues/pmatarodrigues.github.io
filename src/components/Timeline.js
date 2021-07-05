import React from 'react';
import '../tailwind.output.css';

function Timeline() {

  const dataEducation = [
    {
      "title": "Master Degree in Computer Science",
      "year": "2019_2021",
      'type': 'education'
    },
    {
      "title": "Degree in Computer Science",
      "year": "2016_19",
      'type': 'education'
    },
    {
      "title": "Summer Internship at Picus",
      "year": "2018 Jun-Aug",
      'type': 'education'
    }
  ];
  const dataExtracurricular = [
    {
      "title": "Web Security - Hands On (Workshop)",
      "year": "2018",
      'type': 'extracurricular'
    },
    {
      "title": "Cybercrime and Cybersecurity Seminars",
      "year": "2017",
      'type': 'extracurricular'
    },
    {
      "title": "Refood Volunteering",
      "year": "2017",
      'type': 'extracurricular'
    },
    {
      "title": "SPEC - Technology News Blog",
      "year": "2016_17",
      'type': 'extracurricular'
    },
    {
      "title": "Inspire Portugal (Web Summit)",
      "year": "2016",
      'type': 'extracurricular'
    }
  ]

  return (
    <div id="achievements" className="p-10 w-full bg-prussian-blue-600  justify-center">
      <div className="justify-center max-w-2xl mx-auto">
        <button className={"section-title text-4xl sm:text-6xl text-gray-100 m-2"} ><a id="btn-achievements" href="#achievements">Achievements</a></button>
        <h3 className="text-xl text-prussian-blue-400 text-left">Education</h3>
        {dataEducation.map((event, key) => {
          return (
            <div>
              <div className="justify-center text-left rounded-md shadow-lg bg-prussian-blue-700 p-3 mb-8">
                {/* RIGHT */}
                <p className="text-green-500" >{event.year}</p>
                <p className="text-gray-300">{event.title}</p>
              </div>
            </div>
          )
        })}

        <h3 className="text-xl text-prussian-blue-400 text-left">Extracurricular</h3>
        {dataExtracurricular.map((event, key) => {
          return (
            <div>
              <div className="justify-center text-left rounded-md shadow-lg bg-prussian-blue-700 p-3 mb-8">
                {/* RIGHT */}
                <p className="text-green-500" >{event.year}</p>
                <p className="text-gray-200">{event.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}




export default Timeline;
