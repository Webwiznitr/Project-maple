import "./App.css";
import Navbaroverlay from "./Navbar-overlay";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbaroverlay />
      <Navbar />
      <div id="first-solid-bar">This is it</div>
    </div>
  );
}

export default App;
