import * as React from "react";

export default function App() {
  const mode = "dark";

  return (
    <main className={mode}>
      {mode === "light" ? (
        <button>Activate Dark Mode</button>
      ) : (
        <button>Activate Light Mode</button>
      )}
    </main>
  );
}