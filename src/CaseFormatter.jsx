import { useState, useEffect } from "react";

//match: the entire matched string (e.g. . h)

//prefix: the part before the letter (. or start whitespace) — this is group 1 from the regex

//char: the letter to capitalize — this is group 2 from the regex

const formatText = (text) => {
  return text.replace(/(^\s*|[.!?]\s+)([a-z])/g, (match, prefix, char) => {
    return prefix + char.toUpperCase();
  });
};

const CaseFormatter = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const raw = e.target.value;
    // Format the text using the formatText function
    const formatted = formatText(raw);
    setText(formatted);
  };
  return (
    <>
      <div
        style={{ justifyContent: "center", display: "flex", marginTop: "20px" }}
      >
        <textarea
          style={{
            width: "70%",
            height: "200px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
          rows="10"
          cols="20"
          placeholder="Type here..."
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
        ></textarea>
      </div>
    </>
  );
};

export default CaseFormatter;
