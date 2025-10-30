import { useEffect } from "react";
import Router from "./router/Router";

import "./App.css";
import Button from "@mui/material/Button";

function App() {
  // const [tests, setTests] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((responese) => responese.json())
      .then((result) => console.log(result));
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
