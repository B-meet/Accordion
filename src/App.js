import React from "react";
import Question from "./component";
import { data } from "./data";
import "./index.css";

//Parent component include a child component named Questions

function App() {
  return (
    <main>
      <h3 className='heading'>frequently asked question about login</h3>
      {data.map((innerData) => {
        return <Question key={innerData.id} {...innerData} />;
      })}
    </main>
  );
}

export default App;
