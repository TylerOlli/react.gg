import * as React from "react";

export default function App() {
  const [mode, setMode] = React.useState("dark");

  const handleMode = () => {
    setMode("light");
    if(mode === "light") {
      setMode("dark");
    }
  };

  return (
    <main className={mode}>
      {mode === "light" ? (
        <button onClick={handleMode}>Activate Dark Mode</button>
      ) : (
        <button onClick={handleMode}>Activate Light Mode</button>
      )}
    </main>
  );
}
