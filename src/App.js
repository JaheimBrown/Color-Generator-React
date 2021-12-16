import React, { useState, useEffect } from "react";
import Color from "./Color";
import Values from "values.js";
import Loading from "./Loading";
import random from "./random";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState("");

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

  const generateRandom = () => {
    let randomGen = Math.floor(Math.random() * random.length);
    setList(new Values(random[randomGen]).all(10));
  };

  useEffect(() => {
    let randomColor = Math.floor(Math.random() * random.length);
    const timeOut = setTimeout(() => {
      setList(new Values(random[randomColor]).all(10));
      setLoading(false);
    }, 1750);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <header className="flex">
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="color">Color Generator</label>
              <div>
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
                <button className="btn" onClick={handleSubmit}>
                  Generate
                </button>
              </div>
            </form>
            <button className="randomBtn" onClick={generateRandom}>
              Random
            </button>
          </header>

          <section className="colors-container">
            {list.map((data, index) => {
              return (
                <Color
                  {...data}
                  key={index}
                  hexColor={data.hex}
                  index={index}
                />
              );
            })}
          </section>
        </>
      )}
    </>
  );
}

export default App;
