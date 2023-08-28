import * as React from "react";

export default function ExpandingTextarea() {
  const [text, setText] = React.useState("");
  const textAreaRef = React.useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
    textAreaRef.current.style.height = "inherit";
    const scrollHeight = textAreaRef.current.scrollHeight;
    textAreaRef.current.style.height = scrollHeight + "px";
  };

  return (
    <section className="container">
      <h1>Expanding Textarea</h1>
      <label htmlFor="textarea">Enter or paste in some text</label>
      <textarea
        id="textarea"
        placeholder="Enter some text"
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        rows={1}
      />
    </section>
  );
}