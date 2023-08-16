import * as React from "react";

function Layout() {
  return (
    <React.Fragment>
      <header>Header</header>
      <main>Main</main>
      <aside>Aside</aside>
      <footer>Footer</footer>
    </React.Fragment>
  );
}

export default function App() {
  return <Layout />;
}