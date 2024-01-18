import { EmojiGrid } from "./emoji-grid";
import { Size } from "./size-form";
import { useState, useRef } from "react";
import { BackgroundGrid } from "./background-grid";

import "./app.css";

export function App() {
  const canvasRef = useRef(null);
  const [emoji, setEmoji] = useState();
  const [color, setColor] = useState();

  const generatePlaceholder = ({ width, height }) => {
    const ctx = canvasRef.current.getContext("2d");

    // bg color
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, width, height);

    // text
    ctx.fillStyle = "#fff";
    ctx.font = "100px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(emoji, width / 2, height);
  };

  return (
    <main>
      <div className="input">
        <EmojiGrid selectedEmoji={emoji} onClick={setEmoji} />
        <BackgroundGrid selectedColor={color} onClick={setColor} />
        <Size onClick={generatePlaceholder} />
      </div>
      <div className="output">
        <canvas ref={canvasRef} style={{ border: "1px solid black" }}></canvas>
      </div>
    </main>
  );
}
