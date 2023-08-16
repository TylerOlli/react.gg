import * as React from "react";

export default function App() {
  const [mode, setMode] = React.useState("dark");

  const handleDarkMode = () => {
    setMode("dark");
  };

  const handleLightMode = () => {
    setMode("light");
  };

  return (
    <main className={mode}>
      {mode === "light" ? (
        <button onClick={handleDarkMode}>Activate Dark Mode</button>
      ) : (
        <button onClick={handleLightMode}>Activate Light Mode</button>
      )}
    </main>
  );
}