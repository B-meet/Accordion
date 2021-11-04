import React from "react";
import { useState } from "react";

//child component involving The individual FAQ

const Question = ({ id, title, info }) => {
  const [showTheContent, setShowTheContent] = useState(false);

  return (
    <section className='question-box'>
      <article className='quest-btn-wrap'>
        <h4 className='question'>{title}</h4>
        <button
          className='btn'
          onClick={() => setShowTheContent(!showTheContent)}
        >
          {showTheContent ? "-" : "+"}
        </button>
      </article>
      <p className='content'>{showTheContent ? info : ""}</p>
    </section>
  );
};

export default Question;
