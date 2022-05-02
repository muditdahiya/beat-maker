import { Howl } from "howler";
import { useEffect } from "react";

function HiHatOpen(props) {
  let sound;
  let playSound;
  useEffect(() => {
    sound = new Howl({
      src: [`/Samples/HiHatOpen/CYCdh_Sab_OpHat-0${props.choice}.wav`],
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
      className="HiHatOpen key"
      onClick={() => {
        sound.play();
      }}
      onTouchStart={(event) => {
        sound.play();
      }}
      onTouchEnd={(e) => e.preventDefault()}
    >
      <p>HiHatOpen</p>
    </div>
  );
}

export default HiHatOpen;
