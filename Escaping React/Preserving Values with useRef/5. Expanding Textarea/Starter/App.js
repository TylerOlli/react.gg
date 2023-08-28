import * as React from "react";

export default function ExpandingTextarea() {
  const text = "";

  return (
    <section className="container">
      <h1>Expanding Textarea</h1>
      <label htmlFor="textarea">Enter or paste in some text</label>
      <textarea
        id="textarea"
        placeholder="Enter some text"
        value={text}
        onChange={() => {}}
        rows={1}
      />
    </section>
  );
}