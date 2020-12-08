
import React, { useState } from 'react';
import '../tailwind.output.css';

function WhoAmI() {

  return (
    <div className="w-full flex justify-center h-56 items-center mt-40 md:mt-5 md:h-24">
      <div className="bg-prussian-blue-600 rounded-lg text-left p-5 md:h-0 md:p-40 md:w-2/3 sm:px-12">
        <h1 className="text-white text-xl lg:text-4xl">I'm Pedro!</h1>
        <h4 className="text-white text-sm sm:text-xs lg:text-base">
        <br/>
        I like to build new and fun stuff all the time.
        I mainly work with Javascript but, as some say, I'm a fast learner so I've worked with Python, C#, Ruby, Java, C and I'm currently testing some things with Go.
        <br/>
        Git, MongoDB, MySQL, Photoshop, Illustrator are some of the tools I mainly work with, when talking about non-programming languages.
        <br/>
        <br/>
        I usually try to follow what I'm currently learning with small blog posts. (<strong className="underline"><a href="/blog">check them out here</a></strong>)
        <br/>
        Oh, and by the way... This is me
        <br/>
        <img src="image.jpeg" className="w-32 h-auto sm:w-64" />
        <br/>
        <h4 className="text-xs">If you'd like to talk to me (for suggestions, partnerships or just have some discussion) hit me up. My contacts are at the bottom of this page. Have a nice day ;)</h4>
        </h4>
      </div>
    </div>
  );
}


export default WhoAmI;
