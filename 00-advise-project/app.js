function App() {
  const [advice, setAdvice] = React.useState("");
  const [count, setCount] = React.useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(c => c + 1);
  }

  React.useEffect(() => {
    getAdvice();
  }, [])

  return (<div>
    <h1>{advice}</h1>
    <button onClick={getAdvice}>get advice</button>
    <Message count={count} />
  </div>);
}

function Message({ count }) {
  return (
    <p>
      you have been read {count} pieces of advice
    </p>
  );
}