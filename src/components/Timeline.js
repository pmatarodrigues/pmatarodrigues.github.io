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
      "year" : "16_17"
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
      "year" : "16_19"
    },
    {
      "title": "Master Degree in Computer Science",
      "year" : "19_"
    }
  ]

  return (
    <div id="timeline" className="p-10">
      <div className="justify-center">
          {data.map((event, key) => {

            var variationsBackground = event.year.includes('_') ? " p-0 py-2 " : " p-2 py-0 ";
            var varitionsText = event.year.includes('_') ? " text-sm " : " text-3xl ";

            return (
              <div>
                <div className="justify-center text-left rounded-md shadow-lg bg-white p-3 mb-8">
                  {/* RIGHT */}
                  <p className="text-gray-600">{event.title}</p>
                </div>
                <div className="arrow-square"></div>
                  <div className={"year-event transparent w-10 h-10 " + variationsBackground + " rounded-full overflow-hidden"}>
                    <div className={"" + varitionsText + " text-prussian-blue-200 text-center rounded-full align-top"}>{event.year}</div>
                  </div>
              </div>
            )
          })}
      </div>
    </div>
  );
}




export default Timeline;
