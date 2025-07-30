import React, { useState } from "react";

export default function BoxShadowGenerator() {
  const [h, setH] = useState(0);
  const [v, setV] = useState(4);
  const [blur, setBlur] = useState(12);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#00000033");
  const boxShadow = `${h}px ${v}px ${blur}px ${spread}px ${color}`;
  return (
    <div className="prose mx-auto py-12 px-4 max-w-2xl">
      <h1>Box-Shadow Generator</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        <label>H: <input type="number" value={h} onChange={e => setH(+e.target.value)} className="w-16" /></label>
        <label>V: <input type="number" value={v} onChange={e => setV(+e.target.value)} className="w-16" /></label>
        <label>Blur: <input type="number" value={blur} onChange={e => setBlur(+e.target.value)} className="w-16" /></label>
        <label>Spread: <input type="number" value={spread} onChange={e => setSpread(+e.target.value)} className="w-16" /></label>
        <label>Color: <input type="color" value={color} onChange={e => setColor(e.target.value)} /></label>
      </div>
      <div className="w-32 h-32 rounded-lg border mb-4" style={{ boxShadow, background: "#fff" }} />
      <div className="font-mono bg-gray-100 p-2 rounded">box-shadow: {boxShadow};
        <button className="ml-4 px-2 py-1 bg-accent text-white rounded" onClick={() => navigator.clipboard.writeText(boxShadow)}>Copy</button>
      </div>
    </div>
  );
}
