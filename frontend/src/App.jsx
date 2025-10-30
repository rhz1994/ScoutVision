import { useEffect } from "react";
import Router from "./router/Router";
import "./App.css";
import UserContextProvider from "./contexts/UserProvider";

function App() {
  // const [tests, setTests] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((responese) => responese.json())
      .then((result) => console.log(result));
  }, []);

  return (
    <>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </>
  );
}

export default App;
