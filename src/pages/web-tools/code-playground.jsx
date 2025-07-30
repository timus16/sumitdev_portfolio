import React, { useState } from "react";

export default function CodePlayground() {
  const [code, setCode] = useState("<h1>Hello, world!</h1>");
  return (
    <div className="prose mx-auto py-12 px-4 max-w-2xl">
      <h1>Code Playground</h1>
      <p>Write and preview HTML, CSS, and JS live. (React support coming soon!)</p>
      <textarea
        className="w-full h-40 border rounded p-2 font-mono text-sm"
        value={code}
        onChange={e => setCode(e.target.value)}
        spellCheck={false}
      />
      <h2 className="mt-6">Preview</h2>
      <div className="border rounded bg-white p-4 min-h-[100px]" style={{ minHeight: 100 }}>
        <iframe
          title="preview"
          srcDoc={code}
          sandbox="allow-scripts allow-same-origin"
          className="w-full min-h-[100px] border-none"
        />
      </div>
    </div>
  );
}
