import { render } from '@testing-library/react';
import React from 'react';
import { Adobeillustrator, Adobephotoshop, C, Git, Javascript, Mysql, NodeDotJs, Python, Java, ReactJs } from '@icons-pack/react-simple-icons';
import '../tailwind.output.css';

function Timeline() {

  const data = [
    {
      "title": "Inspire Portugal (Web Summit)",
      "year" : "16"
    },
    {
      "title": "SPEC - Technology News Blog",
      "year" : "16-17"
    },
    {
      "title": "Cybercrime and Cybersecurity Seminars",
      "year" : "17"
    },
    {
      "title": "Refood Volunteering",
      "year" : "17"
    },
    {
      "title": "Web Security - Hands On (Workshop)",
      "year" : "18"
    },
    {
      "title": "Internship at Picus",
      "year" : "18"
    },
    {
      "title": "Degree in Computer Science",
      "year" : "16-19"
    },
    {
      "title": "Master Degree in Computer Science",
      "year" : "19-"
    }
  ]

  return (
    <div id="timeline" className="p-10">
      <div className="justify-center">
          {data.map((event, key) => {
            return (
              <p>
                <strong className="text-4xl text-green-300 text-center p-3 rounded-full">_ {event.year} /</strong>
                <p className="">{event.title}</p>
              </p>
            )
          })}
      </div>
    </div>
  );
}




export default Timeline;
