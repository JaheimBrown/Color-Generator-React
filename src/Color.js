import React, { useState, useEffect } from "react";
import { MdConnectedTv, MdContentCopy } from "react-icons/md";

const Color = ({ rgb, weight, hexColor, index }) => {
  const [copy, setCopy] = useState(false);
  const bg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (copy) {
        setCopy(false);
      }
    }, 2600);

    return () => {
      clearTimeout(timeOut);
    };
  }, [copy]);

  return (
    <>
      <article
        className={`color ${index > 10 && "lightText"}`}
        style={{ backgroundColor: `rgb(${bg})` }}
      >
        <span>{weight}%</span>
        <p className="hex">{hexValue}</p>
        <MdContentCopy
          className="copy"
          onClick={() =>
            setCopy(() => {
              navigator.clipboard.writeText(hexValue);
              return true;
            })
          }
        >
          <abbr title="Copy Hex color" />
        </MdContentCopy>
      </article>
      <div className={copy ? "copy-text active" : "copy-text"}>
        Color copied to the clipboard!
      </div>
    </>
  );
};

export default Color;
