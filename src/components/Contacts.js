import React from 'react';
import '../tailwind.output.css';
import { Link, Mail } from "heroicons-react";
import { Linkedin, Github } from '@icons-pack/react-simple-icons';


function Contacts() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-prussian-blue-600 w-full text-left p-10">
        <p className="text-white text-base lg:text-5xl"><strong className="text-green-500"> pedro@matarodrigues: ~ $ </strong>
        Contacts:
        <p className="flex justify-items-end text-sm"><Mail size={15} />_ me@pmatarodrigues.com</p>
        <p className="flex justify-items-end text-sm"><Linkedin size={15} />_ /in/pmatarodrigues</p>
        <p className="flex justify-items-end text-sm"><Github size={15} />_ /pmatarodrigues</p>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
