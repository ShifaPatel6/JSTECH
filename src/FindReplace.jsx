import React, { useState } from "react";

const handleFindword = (text, word) => {
  if (!word) return text;
  const regex = new RegExp(`(${word})`, "gi");

  return text.includes(word)
    ? text.replace(regex, '<span style="background-color: yellow;">$1</span>')
    : text;
};

const FindReplace = () => {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [highlighted, setHighlighted] = useState("");

  const handleHighlited = () => {
    const result = handleFindword(text, word);
    setHighlighted(result);
  };

  const handleInput = (e) => {
    setText(e.target.innerText);
  };
  return (
    <>
      <div style={{ position: "relative", width: "70%", margin: "20px auto" }}>
        <div
          contentEditable
          onInput={handleInput}
          dangerouslySetInnerHTML={{ __html: highlighted }}
          style={{
            border: "1px solid #ccc",
            minHeight: "80px",
            padding: "10px",
          }}
        ></div>

        <div>
          <input
            type="text"
            style={{ border: "1px solid #ccc" }}
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          {console.log(word, "word")}
          <button
            type=""
            style={{ margin: "30px", border: "1px solid #ccc", padding: "6px" }}
            onClick={() => handleHighlited()}
          >
            Find Word
          </button>
        </div>
      </div>
    </>
  );
};

export default FindReplace;
