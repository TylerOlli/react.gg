import * as React from "react";

function TextInput() {
  return (
    <div>
      <h1>Autofocus Input</h1>
      <label htmlFor="focus">Email Address</label>
      <input id="focus" type="email" placeholder="Enter your email" />
    </div>
  );
}

export default TextInput;