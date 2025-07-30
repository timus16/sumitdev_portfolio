import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaPalette, FaRegClone, FaFileCode, FaSearch, FaImage, FaMobileAlt, FaQrcode } from "react-icons/fa";

const tools = [
  { name: "Code Playground", path: "/web-tools/code-playground", desc: "Try HTML, CSS, JS, and React code live.", icon: <FaCode className="text-primary" size={24} /> },
  { name: "Color Picker", path: "/web-tools/color-picker", desc: "Pick and copy any color or gradient.", icon: <FaPalette className="text-accent" size={24} /> },
  { name: "Box-Shadow Generator", path: "/web-tools/box-shadow-generator", desc: "Create and copy CSS box-shadows.", icon: <FaRegClone className="text-secondary" size={24} /> },
  { name: "JSON Formatter", path: "/web-tools/json-formatter", desc: "Format and validate JSON instantly.", icon: <FaFileCode className="text-success" size={24} /> },
  { name: "Regex Tester", path: "/web-tools/regex-tester", desc: "Test and debug regular expressions.", icon: <FaSearch className="text-warning" size={24} /> },
  { name: "Image Compressor", path: "/web-tools/image-compressor", desc: "Compress and optimize images online.", icon: <FaImage className="text-pink-500" size={24} /> },
  { name: "Responsive Tester", path: "/web-tools/responsive-tester", desc: "Preview your site on different devices.", icon: <FaMobileAlt className="text-blue-400" size={24} /> },
  { name: "QR Code Generator", path: "/web-tools/qr-code-generator", desc: "Create QR codes for any text or URL.", icon: <FaQrcode className="text-gray-700" size={24} /> }
];

export default function WebToolsIndex() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-surface to-muted py-12 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-primary mb-2 tracking-tight">Web Tools <span className="text-gradient-primary">Hub</span></h1>
          <p className="text-lg text-text-secondary">A collection of free, interactive tools for developers and creators. No login required.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              to={tool.path}
              className="group block glass-morphism rounded-2xl p-6 shadow-floating hover:shadow-dramatic transition-all duration-300 border border-border hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/60 to-accent/10 shadow-subtle group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">{tool.name}</span>
              </div>
              <div className="text-text-secondary text-sm mt-1">{tool.desc}</div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center text-xs text-text-secondary opacity-70">
          <span>iOS-inspired UI &mdash; Built with ❤️ by SumitDev</span>
        </div>
      </div>
    </div>
  );
}
