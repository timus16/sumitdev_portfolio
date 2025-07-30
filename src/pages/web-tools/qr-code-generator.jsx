import React, { useState } from "react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  function generateQR() {
    setUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`);
  }

  return (
    <div className="prose mx-auto py-12 px-4 max-w-2xl">
      <h1>QR Code Generator</h1>
      <input
        className="w-full border rounded p-2 mb-2"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text or URL"
      />
      <button className="px-4 py-1 bg-accent text-white rounded" onClick={generateQR}>Generate</button>
      {url && (
        <div className="mt-4">
          <img src={url} alt="QR Code" className="mx-auto" />
        </div>
      )}
    </div>
  );
}
