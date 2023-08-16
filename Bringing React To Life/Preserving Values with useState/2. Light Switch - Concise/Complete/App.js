import * as React from "react";

export default function App() {
  const [mode, setMode] = React.useState("dark");

  const handleClick = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <main className={mode}>
      <button onClick={handleClick}>
        {mode === "dark" ? "Activate Light Mode" : "Activate Dark Mode"}
      </button>
    </main>
  );
}