import React from "react";
import { useState } from "react";

//child component involving The individual FAQ

const Question = ({ id, title, info }) => {
  const [showTheContent, setShowTheContent] = useState(false);

  return (
    <section className='question-box'>
      <h4 className='question'>{title}</h4>
      <button
        className='content-toggle'
        onClick={() => setShowTheContent(!showTheContent)}
      >
        {showTheContent ? "-" : "+"}
      </button>
      <p className='content'>{showTheContent ? info : ""}</p>
    </section>
  );
};

export default Question;
