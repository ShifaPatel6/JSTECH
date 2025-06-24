import { useState } from "react";

const ParagraphReplacerr = () => {
  const [text, setText] = useState("");
  const splitted = text.split(/\n+/).filter(Boolean);

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
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        {splitted.map((para, index) => (
          <p
            key={index}
            style={{
              marginBottom: "16px",
              padding: "10px",
              background: "#f9f9f9",
              borderLeft: "4px solid #ccc",
            }}
          >
            <strong>{"🔹"}</strong> {para}
          </p>
        ))}
      </div>
    </>
  );
};

export default ParagraphReplacerr;
