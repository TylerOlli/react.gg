import * as React from "react";

function TextInput() {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h1>Autofocus Input</h1>
      <label htmlFor="focus">Email Address</label>
      <input
        id="focus"
        ref={inputRef}
        type="email"
        placeholder="Enter your email"
      />
    </div>
  );
}

export default TextInput;