import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  function handleTextChange(event) {
    const textValue = event.target.value;
    setText(textValue);
    setWordCount(textValue.trim().split(/\s+/).length);
  }
  return (
    <center>
      <div class="container">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea value={text} onChange={handleTextChange} />
        <p>Word count: {wordCount}</p>
      </div>
    </center>
  );
}

export default App;
