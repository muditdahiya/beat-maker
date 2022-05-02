function Form(props) {
  // console.log(props);

  function handleChange() {
    const value = document.getElementById(`${props.type}choice`).value;
    props.updateChoice(value, props.type);
  }

  function updateKey() {
    const value = document.getElementById(`${props.type}key`).value;
    props.updateKey(value, props.type);
  }

  return (
    <div className="Form">
      <h4>Drum: {props.type.toUpperCase()}</h4>
      <p>
        Key Mapping:
        <input
          id={props.type + "key"}
          type="text"
          onChange={updateKey}
          value={props.mapping}
          maxLength="1"
        ></input>
      </p>
      <div className="dropdown">
        <label htmlFor="sound-choice">Sound Choice: </label>
        <select
          name="sound-choice"
          id={props.type + "choice"}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
