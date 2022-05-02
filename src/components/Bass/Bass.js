import { Howl } from "howler";
import { useEffect } from "react";

function Bass(props) {
  let sound;
  let playSound;
  useEffect(() => {
    sound = new Howl({
      src: [`/Samples/Bass/CYCdh_AcouKick-0${props.choice}.wav`],
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
      className="Bass key"
      onClick={() => {
        sound.play();
      }}
      onTouchStart={(event) => {
        sound.play();
      }}
      onTouchEnd={(e) => e.preventDefault()}
    >
      <p>Bass</p>
    </div>
  );
}

export default Bass;
