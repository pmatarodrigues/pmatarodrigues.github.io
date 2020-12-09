
import React, { useState } from 'react';
import '../tailwind.output.css';

function Terminal() {

  return (
    <div className="w-full flex justify-center h-64 items-center mt-40 lg:mt-64">
      <div className="bg-prussian-blue-600 rounded-lg text-left p-10 lg:h-64 lg:w-1/3 ">
        <p className="text-white text-2xl lg:text-5xl"><strong className="text-green-500"> pedro@matarodrigues: ~ $ </strong> Hey there!
        </p>
      </div>
    </div>
  );
}

// https://script.google.com/macros/s/AKfycbzbCCrtLEp9m3-Pc3EflBjwJqT4t0HVNlHDsUqguuMruI62yps/exec

export default Terminal;
