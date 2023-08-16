const handleChange = (event) => {
  if (event.target.value.length > 10) {
    alert("Character limit exceeded");
  }
};

function Input({ characterLimit }) {
  return <input onChange={handleChange} placeholder="Enter some text" />;
}

export default function App() {
  return (
    <section>
      <h1>Character Limit</h1>
      <Input characterLimit={20} />
    </section>
  );
}