import { Howl } from "howler";
import { useEffect } from "react";

function Snare(props) {
  let sound;
  let playSound;
  useEffect(() => {
    sound = new Howl({
      src: [
        `${process.env.PUBLIC_URL}/Samples/Snare/Acoustic Snare-0${props.choice}.wav`,
      ],
    });
    playSound = (event) => {
      if (event.key === props.mapping) {
        console.log(props.choice);
        sound.play();
      }
    };

    document.addEventListener("keydown", playSound);

    //return cleans up before the next render
    return () => {
      document.removeEventListener("keydown", playSound);
    };
  });

  return (
    <div
      className="Snare key"
      onClick={() => {
        sound.play();
      }}
      onTouchStart={(event) => {
        sound.play();
      }}
      onTouchEnd={(e) => e.preventDefault()}
    >
      <p>Snare</p>
    </div>
  );
}

export default Snare;
