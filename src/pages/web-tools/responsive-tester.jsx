import React, { useState } from "react";

const devices = [
  { name: "iPhone 14", width: 390, height: 844 },
  { name: "iPad", width: 768, height: 1024 },
  { name: "Laptop", width: 1366, height: 768 },
  { name: "Desktop", width: 1920, height: 1080 }
];

export default function ResponsiveTester() {
  const [url, setUrl] = useState("https://sumitdev.com");
  const [device, setDevice] = useState(devices[0]);
  return (
    <div className="prose mx-auto py-12 px-4 max-w-2xl">
      <h1>Responsive Tester</h1>
      <input
        className="w-full border rounded p-2 mb-2"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Enter site URL (https://...)"
      />
      <div className="flex gap-2 mb-4">
        {devices.map(d => (
          <button
            key={d.name}
            className={`px-3 py-1 rounded ${device.name === d.name ? 'bg-accent text-white' : 'bg-gray-200'}`}
            onClick={() => setDevice(d)}
          >{d.name}</button>
        ))}
      </div>
      <div className="border rounded bg-white flex items-center justify-center" style={{ width: device.width, height: device.height, margin: '0 auto' }}>
        <iframe
          title="responsive-preview"
          src={url}
          width={device.width}
          height={device.height}
          className="border-none"
        />
      </div>
    </div>
  );
}
