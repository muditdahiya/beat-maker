import Drums from "./containers/Drums/Drums.js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            color: "#666666",
            links: {
              color: {
                value: "#856030",
              },
              distance: 500,
              opacity: 0.4,
              width: 2,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              direction: "right",
              outModes: { left: "none" },
              enable: true,
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
            },
            number: {
              density: {
                enable: true,
              },
              value: 400,
            },
            opacity: {
              random: {
                enable: false,
              },
              value: {
                min: 0.1,
                max: 0.5,
              },
              animation: {
                speed: 0.1,
                minimumValue: 0.01,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 1,
                max: 10,
              },
              animation: {
                speed: 1,
                minimumValue: 0.1,
              },
            },
          },
        }}
      />
      <h1>Hi! Welcome to Beat Maker</h1>
      <h2>Tap on the drums or use keyboard keys to play sounds.</h2>

      <Drums />
    </div>
  );
}

export default App;
