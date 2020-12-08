import React from 'react';
import '../tailwind.output.css';

function Timeline() {

  const data = [
    {
      "title": "Master Degree in Computer Science",
      "year" : "2019_2021"
    },
    {
      "title": "Degree in Computer Science",
      "year" : "2016_19"
    },
    {
      "title": "Internship at Picus",
      "year" : "2018"
    },
    {
      "title": "Web Security - Hands On (Workshop)",
      "year" : "2018"
    },
    {
      "title": "Cybercrime and Cybersecurity Seminars",
      "year" : "2017"
    },
    {
      "title": "Refood Volunteering",
      "year" : "2017"
    },
    {
      "title": "SPEC - Technology News Blog",
      "year" : "2016_17"
    },
    {
      "title": "Inspire Portugal (Web Summit)",
      "year" : "2016"
    }
  ]

  return (
    <div id="achievements" className="p-10 w-full bg-prussian-blue-600  justify-center">
      <div className="justify-center max-w-2xl mx-auto">
        <button className={"section-title text-4xl sm:text-6xl text-gray-100 m-2"} ><a id="btn-achievements" href="#achievements">Achievements</a></button>
          {data.map((event, key) => {

            var variationsBackground = event.year.includes('_') ? " p-0 py-2 " : " p-2 py-0 ";
            var varitionsText = event.year.includes('_') ? " text-xs " : " text-sm";

            return (
              <div>
                <div className="justify-center text-left rounded-md shadow-lg bg-prussian-blue-700 p-3 mb-8">
                  {/* RIGHT */}
                  <p className="text-green-500" >{event.year}</p>
                  <p className="text-gray-200">{event.title}</p>
                </div>
                {/* <div className="arrow-square"></div> */}
                {/* <div className={"year-event transparent w-10 h-10 " + variationsBackground + " rounded-full overflow-hidden"}>
                  <div className={"" + varitionsText + " text-prussian-blue-200 text-center rounded-full align-top"}>{event.year}</div>
                </div> */}
              </div>
            )
          })}
      </div>
    </div>
  );
}




export default Timeline;
