import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HexColorPicker, HexColorInput } from "react-colorful";

export default function App() {
  const [colour, setColour] = useState("#b00b69");

  return (
    <div>
      <h2>Responsive</h2>
      <section>
        <HexColorPicker color={colour} onChange={setColour} />
        <HexColorInput color={colour} onChange={setColour} prefixed />
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
