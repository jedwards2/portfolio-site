import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className="App">
      <Header />
      <Profile />
    </div>
  );
}

export default App;
