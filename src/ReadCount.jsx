import { useState } from "react";
//a. Create a text area component that shows word count, char count, and reading time in real-time.

const GetCount = (text) => {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  console.log(`Word Count: ${wordCount}`);

  return wordCount;
};
const GetCharCount = (text, excludeSpaces = true) => {
  const charCount = excludeSpaces
    ? text.replace(/\s+/g, "").length
    : text.length;
  console.log(`Character Count: ${charCount}`);

  return charCount;
};
const GetReadingCount = (wordCount) => {
  const wordsPerMinute = 50; // Average reading speed
  console.log(wordCount, "passed");

  const ReadingCount = wordCount / wordsPerMinute; // Convert to seconds
  console.log(`Reading Count: ${ReadingCount}`);

  return ReadingCount < 1
    ? `${Math.ceil(ReadingCount * 60)} sec`
    : `${ReadingCount.toFixed(1)} min`;
};
// const GetReadingtime = (e) => {};
const ReadCount = () => {
  const [text, setText] = useState("");
  const wordCount = GetCount(text);
  const charCount = GetCharCount(text);
  const ReadingCount = GetReadingCount(wordCount);

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

      <div
        style={{
          marginTop: "20px",
          justifyContent: "space-evenly",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          <strong>Words:</strong> {wordCount}
        </div>
        <div>
          <strong>Characters:</strong> {charCount}
        </div>
        <div>
          <strong>Reading Time:</strong> {ReadingCount}
        </div>
      </div>
    </>
  );
};
export default ReadCount;
