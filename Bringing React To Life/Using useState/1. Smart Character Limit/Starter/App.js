import React from "react";

function LimitedTextInput({ characterLimit = 20 }) {
  const inputValue = "";

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // if input length is too long
    // alert "The input exceeds the character limit. Please shorten your text."
    // else
    // alert "Thanks for your submission"
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className="no-error">Characters remaining: TODO</span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default LimitedTextInput;