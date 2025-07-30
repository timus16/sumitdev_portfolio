import React from "react";
import { Link } from "react-router-dom";

const tools = [
  { name: "Code Playground", path: "/web-tools/code-playground", desc: "Try HTML, CSS, JS, and React code live." },
  { name: "Color Picker", path: "/web-tools/color-picker", desc: "Pick and copy any color or gradient." },
  { name: "Box-Shadow Generator", path: "/web-tools/box-shadow-generator", desc: "Create and copy CSS box-shadows." },
  { name: "JSON Formatter", path: "/web-tools/json-formatter", desc: "Format and validate JSON instantly." },
  { name: "Regex Tester", path: "/web-tools/regex-tester", desc: "Test and debug regular expressions." },
  { name: "Image Compressor", path: "/web-tools/image-compressor", desc: "Compress and optimize images online." },
  { name: "Responsive Tester", path: "/web-tools/responsive-tester", desc: "Preview your site on different devices." },
  { name: "QR Code Generator", path: "/web-tools/qr-code-generator", desc: "Create QR codes for any text or URL." }
];

export default function WebToolsIndex() {
  return (
    <div className="prose mx-auto py-12 px-4 max-w-2xl">
      <h1 className="mb-4">Web Development Tools</h1>
      <p className="mb-8 text-lg">A collection of free, interactive tools for developers and creators. No login required.</p>
      <ul className="space-y-4">
        {tools.map((tool) => (
          <li key={tool.name} className="border rounded-lg p-4 hover:shadow-md transition">
            <Link to={tool.path} className="text-accent font-bold text-lg hover:underline">{tool.name}</Link>
            <div className="text-gray-600 text-sm mt-1">{tool.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
