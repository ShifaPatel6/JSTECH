import { useState } from "react";
const emojies = {
  ":smile:": "😀",
  ":happy:": "😊",
  ":angry:": "😠",
  ":love:": "❤️",
};
const EmojiReplace = (text) => {
  return text.replace(/:(\w+):/g, (match) => emojies[match] || match);
};

const EmojiReplacer = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <textarea
        placeholder=" Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "70%",
          height: "200px",
          border: "1px solid #ccc",
          padding: "10px",
          margin: "20px",
        }}
      />
      <div>Replaced Emoji : {EmojiReplace(text)}</div>
    </div>
  );
};
export default EmojiReplacer;
