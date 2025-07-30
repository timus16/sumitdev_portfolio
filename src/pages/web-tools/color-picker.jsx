import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#3498db");
  return (
    <div className="prose mx-auto py-12 px-4 max-w-2xl">
      <h1>Color Picker</h1>
      <input
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
        className="w-16 h-16 border-2 border-gray-300 rounded-full cursor-pointer"
      />
      <div className="mt-4">
        <span className="font-mono text-lg">{color}</span>
        <button
          className="ml-4 px-3 py-1 bg-accent text-white rounded hover:bg-accent-dark"
          onClick={() => navigator.clipboard.writeText(color)}
        >Copy</button>
      </div>
    </div>
  );
}
