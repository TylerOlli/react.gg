function Badge() {
  return (
    <div className="badge">
      <img alt={``} src={``} />
      <div>
        <h4>NAME</h4>
        <p>@HANDLE</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      name="Tyler McGinnis"
      handle="tylermcginnis"
      img="https://avatars0.githubusercontent.com/u/2933430"
    />
  );
}
