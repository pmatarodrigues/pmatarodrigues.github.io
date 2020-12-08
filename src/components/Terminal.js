
import React, { useState } from 'react';
import '../tailwind.output.css';
import axios from 'axios';

function Terminal() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  return (
    <div className="w-full flex justify-center h-64 items-center mt-40 lg:mt-64">
      <div className="bg-prussian-blue-600 rounded-lg text-left p-10 lg:h-64 lg:w-1/3 ">
        <p className="text-white text-2xl lg:text-5xl"><strong className="text-green-500"> pedro@matarodrigues: ~ $ </strong> Hey there!
        </p>
      </div>

      {/* <form>
        <input type="text" placeholder="Name" onChange={(e) => {setFormName(e.target.value)}} />
        <input type="text" placeholder="Email" onChange={(e) => {setFormEmail(e.target.value)}} />
        <input type="text" placeholder="Message" onChange={(e) => {setFormMessage(e.target.value)}} />
        <button onClick={(e) => sendContactForm(e, formName, formEmail, formMessage)}>Enviar</button>
      </form> */}
    </div>
  );
}

function sendContactForm(e, formName, formEmail, formMessage){
  e.preventDefault();
  console.log(formName, formEmail, formMessage)
  let url = "https://script.google.com/macros/s/AKfycbzbCCrtLEp9m3-Pc3EflBjwJqT4t0HVNlHDsUqguuMruI62yps/exec"
  // axios.post(url, {}{

  // })
  // .then(res => res.data)
  // .catch(error => console.log(error))
}


// https://script.google.com/macros/s/AKfycbzbCCrtLEp9m3-Pc3EflBjwJqT4t0HVNlHDsUqguuMruI62yps/exec

export default Terminal;
