import { useState } from "react";
import Bass from "../../components/Bass/Bass.js";
import HiHatClose from "../../components/HiHatClose/HiHatClose.js";
import HiHatOpen from "../../components/HiHatOpen/HiHatOpen.js";
import Snare from "../../components/Snare/Snare.js";
import Form from "../Form/Form.js";

function Drums(props) {
  //use state for all the choices
  const [bassChoice, updateBassChoice] = useState(1);
  const [snareChoice, updateSnareChoice] = useState(1);
  const [hiHatOpenChoice, updateHiHatOpenChoice] = useState(1);
  const [hiHatCloseChoice, updateHiHatCloseChoice] = useState(1);

  //key mappings
  const [bassKey, updateBassKey] = useState("a");
  const [snareKey, updateSnareKey] = useState("s");
  const [hihatcloseKey, updateHihatcloseKey] = useState("t");
  const [hihatopenKey, updateHihatopenKey] = useState("y");

  function updateChoice(option, drum) {
    //update the state for choice
    if (drum === "bass") {
      updateBassChoice(option);
    } else if (drum === "snare") {
      updateSnareChoice(option);
    } else if (drum === "hihatopen") {
      updateHiHatOpenChoice(option);
    } else if (drum === "hihatclose") {
      updateHiHatCloseChoice(option);
    }
  }

  function updateKey(key, drum) {
    //update the state for choice
    if (drum === "bass") {
      updateBassKey(key);
    } else if (drum === "snare") {
      updateSnareKey(key);
    } else if (drum === "hihatopen") {
      updateHihatopenKey(key);
    } else if (drum === "hihatclose") {
      updateHihatcloseKey(key);
    }
  }

  return (
    <div className="Drums">
      <div className="keys">
        <HiHatOpen mapping={hihatopenKey} choice={hiHatOpenChoice} />
        <HiHatClose mapping={hihatcloseKey} choice={hiHatCloseChoice} />
      </div>
      <div className="keys">
        <Bass mapping={bassKey} choice={bassChoice} />
        <Snare mapping={snareKey} choice={snareChoice} />
      </div>
      <div className="form">
        <h3>Key mappings and sounds </h3>
        <Form
          mapping={bassKey}
          updateChoice={updateChoice}
          type="bass"
          updateKey={updateKey}
        />
        <Form
          mapping={snareKey}
          updateChoice={updateChoice}
          type="snare"
          updateKey={updateKey}
        />
        <Form
          mapping={hihatopenKey}
          updateChoice={updateChoice}
          type="hihatopen"
          updateKey={updateKey}
        />
        <Form
          mapping={hihatcloseKey}
          updateChoice={updateChoice}
          type="hihatclose"
          updateKey={updateKey}
        />
      </div>
    </div>
  );
}

export default Drums;
