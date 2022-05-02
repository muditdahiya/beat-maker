import Drums from "./containers/Drums/Drums.js";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

function App() {
  return (
    <div className="App">
      <h1>Hi! Welcome to Beat Maker</h1>
      <h2>Tap on the drums or use keyboard keys to play sounds.</h2>

      <Drums />
    </div>
  );
}

export default App;
