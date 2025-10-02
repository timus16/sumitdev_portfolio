import React from "react";

export default function BubbleIO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#22D3EE]/10 via-[#FFD700]/10 to-[#fff]/10 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-accent mb-4">Bubble.io</h1>
      <p className="max-w-2xl text-lg text-text-secondary mb-8 text-center">
        Bubble.io is a leading no-code platform for building web applications visually. Drag, drop, and connect logic without writing code. Perfect for startups, agencies, and makers.
      </p>
      <div className="w-full max-w-3xl bg-card rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-2 text-primary">Key Features</h2>
        <ul className="list-disc pl-6 text-text-secondary">
          <li>Visual drag-and-drop editor</li>
          <li>Database and workflow automation</li>
          <li>Responsive design tools</li>
          <li>API integrations</li>
          <li>Marketplace for plugins</li>
        </ul>
      </div>
      <a href="https://bubble.io" target="_blank" rel="noopener" className="px-6 py-3 bg-accent text-white rounded-lg font-semibold shadow hover:bg-primary transition">Explore Bubble.io</a>
    </div>
  );
}
