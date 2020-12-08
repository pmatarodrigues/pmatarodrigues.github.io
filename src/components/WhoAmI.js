
import React, { useState } from 'react';
import '../tailwind.output.css';

function WhoAmI() {

  return (
    <div className="w-full flex justify-center h-64 items-center mt-56 lg:mt-64">
      <div className="bg-prussian-blue-600 rounded-lg text-left p-48 lg:h-64 lg:w-1/3 ">
        <h1 className="text-white text-xl">I'm Pedro!</h1>
        <h4 className="text-white text-sm">I'm a Computer Science student, also working as a software developer.
        <br/>
        <br/>
        I like to build new and fun stuff all the time.
        I mainly work with Javascript but, as some say, I'm a fast learner so I've worked with Python, C#, Ruby, Java, C and I'm currently testing some things with Go.
        <br/>
        Git, MongoDB, MySQL, Photoshop, Illustrator are some of the tools I mainly work with, when talking about non-programming languages.
        <br/>
        <br/>
        I usually try to follow what I'm currently learning with small blog posts. (<strong className="underline"><a href="/blog">check them out here</a></strong>)
        <br/>
        <br/>
        Oh, and by the way... This is me
        <br/>
        <img src="image.jpeg" className="w-56 h-auto" />
        <br/>
        <br/>
        If you'd like to talk to me (for suggestions, partnerships or just have some discussion) hit me up. My contacts are at the bottom of this page. Have a nice day ;)
        </h4>
      </div>
    </div>
  );
}


export default WhoAmI;
