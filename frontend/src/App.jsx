import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [tests, setTests] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((responese) => responese.json())
      .then((result) => console.log(result));
  }, []);

  return <></>;
}

export default App;
