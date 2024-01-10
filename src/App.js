import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { ResultProvider } from "./Components/ResultContext";
import ResultBoard from "./Components/Results";
import "./CSS/App.css";

function App() {
  return (
    <>
      <ResultProvider>
        <Navbar />
        <Home />
        <ResultBoard />
      </ResultProvider>
    </>
  );
}

export default App;
