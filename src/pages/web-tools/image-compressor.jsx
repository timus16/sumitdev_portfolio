import React, { useState } from "react";

export default function ImageCompressor() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [compressedUrl, setCompressedUrl] = useState("");

  function handleFile(e) {
    const f = e.target.files[0];
    setFile(f);
    setUrl(URL.createObjectURL(f));
    // For demo: just show the image, real compression would use a library or API
    setCompressedUrl("");
  }

  function fakeCompress() {
    setCompressedUrl(url); // In real use, compress and set new URL
  }

  return (
    <div className="prose mx-auto py-12 px-4 max-w-2xl">
      <h1>Image Compressor (Demo)</h1>
      <input type="file" accept="image/*" onChange={handleFile} />
      {url && (
        <div className="mt-4">
          <img src={url} alt="Original" className="max-w-xs rounded shadow" />
          <button className="ml-4 px-3 py-1 bg-accent text-white rounded" onClick={fakeCompress}>Compress</button>
        </div>
      )}
      {compressedUrl && (
        <div className="mt-4">
          <h2>Compressed Image (simulated)</h2>
          <img src={compressedUrl} alt="Compressed" className="max-w-xs rounded shadow" />
        </div>
      )}
    </div>
  );
}
