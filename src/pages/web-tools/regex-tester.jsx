import React, { useState } from "react";

export default function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  function testRegex() {
    try {
      const re = new RegExp(pattern);
      setResult(re.test(text) ? '✅ Match!' : '❌ No match.');
    } catch {
      setResult('Invalid regex');
    }
  }

  return (
    <div className="prose mx-auto py-12 px-4 max-w-2xl">
      <h1>Regex Tester</h1>
      <input
        className="w-full border rounded p-2 font-mono text-sm mb-2"
        value={pattern}
        onChange={e => setPattern(e.target.value)}
        placeholder="Enter regex pattern (e.g. ^hello$)"
      />
      <textarea
        className="w-full h-24 border rounded p-2 font-mono text-sm mb-2"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text to test"
      />
      <button className="px-4 py-1 bg-accent text-white rounded" onClick={testRegex}>Test</button>
      {result && <div className="mt-4 font-bold">{result}</div>}
    </div>
  );
}
