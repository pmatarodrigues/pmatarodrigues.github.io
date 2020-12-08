import React from 'react';
import '../tailwind.output.css';
import { Link, Mail } from "heroicons-react";
import { Linkedin, Github } from '@icons-pack/react-simple-icons';


function Contacts() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-black w-full text-left p-10">
        <p className="text-white text-base lg:text-5xl"><strong className="text-green-500"> pedro@matarodrigues: ~ $ </strong>
        Contacts:
        <p className="flex justify-items-end text-sm"><Mail size={15} /><a href="mailto:me@pmatarodrigues.com" >_ me@pmatarodrigues.com </a></p>
        <p className="flex justify-items-end text-sm"><Linkedin size={15}/><a href="https://linkedin.com/in/pmatarodrigues">_ /in/pmatarodrigues </a></p>
        <p className="flex justify-items-end text-sm"><Github size={15}/><a href="https://github.com/pmatarodrigues">_ /pmatarodrigues </a></p>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
