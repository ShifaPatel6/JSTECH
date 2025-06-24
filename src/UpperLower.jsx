import { useState } from "react";

const GetUpperCase = (text) => {
  const UpperText = text.toUpperCase();
  return UpperText;
};
const GetLowerCase = (text) => {
  const LowerCase = text.toLowerCase();
  return LowerCase;
};

const UpperLower = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleUpperCase = () => {
    setResult(GetUpperCase(text));
  };
  const handleLowerCase = () => {
    setResult(GetLowerCase(text));
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Type here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "70%",
            height: "40px",
            border: "1px solid #ccc",
            padding: "10px",
            margin: "20px",
          }}
        />
      </div>
      <div>
        <button
          onClick={() => handleUpperCase()}
          style={{ margin: "20px", border: "1px solid #ccc", padding: "10px" }} //}} we cn do it like setResult(GetUpperCase(text))}
        >
          Upper Case
        </button>
        <button
          onClick={() => handleLowerCase()}
          style={{ margin: "20px", border: "1px solid #ccc", padding: "10px" }}
        >
          Lower Case
        </button>
      </div>
      <div>Result : {result}</div>
    </>
  );
};
export default UpperLower;
