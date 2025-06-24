import { useState } from "react";

const GetTrack = (text) => {
  const total = text.length;
  if (total === 0) return "No text provided";
  const englishMatches = text.match(/[a-zA-Z]/g) || [];
  const hindiMatches = text.match(/[\u0900-\u097F]/g) || [];
  const symbolMatches = text.match(/[^a-zA-Z\u0900-\u097F0-9\s]/g) || [];

  const englishCount = englishMatches.length;
  const hindiCount = hindiMatches.length;
  const symbolCount = symbolMatches.length;

  const englishRatio = englishCount / total;
  const hindiRatio = hindiCount / total;

  if (englishRatio > 0.6) return "English";
  if (hindiRatio > 0.6) return "Hindi";
  if (symbolCount / total > 0.3) return "Gibberish";
  console.log("gettrack");
};

const LanguageTracker = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  // if we eant to chekc language without button click
  //   useEffect(() => {
  //   const lang = GetTrack(text);
  //   setResult(lang);
  // }, [text]);

  const handleClick = () => {
    const lang = GetTrack(text);
    setResult(lang);
    console.log("clidkec");
  };

  return (
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

      <button onClick={handleClick}>Check Language</button>
      {result && (
        <div style={{ marginTop: "20px" }}>
          <strong>Detected Language: </strong>
          {result}
        </div>
      )}
    </div>
  );
};

export default LanguageTracker;
