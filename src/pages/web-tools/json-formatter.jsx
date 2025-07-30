import React, { useState } from "react";

export default function JSONFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  function formatJSON() {
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj, null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JSON');
      setOutput('');
    }
  }

  return (
    <div className="prose mx-auto py-12 px-4 max-w-2xl">
      <h1>JSON Formatter</h1>
      <textarea
        className="w-full h-32 border rounded p-2 font-mono text-sm"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Paste or type JSON here..."
        spellCheck={false}
      />
      <button className="mt-2 px-4 py-1 bg-accent text-white rounded" onClick={formatJSON}>Format</button>
      {error && <div className="text-red-600 mt-2">{error}</div>}
      {output && (
        <pre className="bg-gray-100 p-2 rounded mt-4 overflow-x-auto"><code>{output}</code></pre>
      )}
    </div>
  );
}
