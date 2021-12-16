import React, { useState } from "react";
import Color from "./Color";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#4833b0").all(10));

  const handleSubmit = e => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="color">Color Generator</label>
        <div className="flex">
          <input
            className={`${error ? "error" : null}`}
            type="text"
            id="color"
            name="color"
            placeholder="#521945"
            value={color}
            onChange={e => {
              setColor(e.target.value);
            }}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </div>
      </form>

      <section className="colors-container">
        {list.map((data, index) => {
          return (
            <Color {...data} key={index} hexColor={data.hex} index={index} />
          );
        })}
      </section>
    </>
  );
}

export default App;
