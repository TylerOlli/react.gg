function Avatar() {
  return <img src={``} alt={``} />;
}

function Name() {
  return <h4>name</h4>;
}

function Handle() {
  return <p>@HANDLE</p>;
}

function Badge() {
  return (
    <div style={{}}>
      <Avatar />
      <div>
        <Name />
        <Handle />
        <button onClick={() => {}}>Add Friend</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      user={{
        name: "Lynn Fisher",
        img: "https://avatars.githubusercontent.com/u/871315",
        handle: "lynnandtonic"
      }}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid var(--beige-10)",
        borderRadius: 8,
        backgroundColor: "var(--charcoal)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center"
      }}
      addFriend={() => alert("Added!")}
    />
  );
}