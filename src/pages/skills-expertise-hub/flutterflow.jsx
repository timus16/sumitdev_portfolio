import React from "react";

export default function FlutterFlow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#22D3EE]/10 via-warm-gold/10 to-[#fff]/10 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-primary mb-4">FlutterFlow</h1>
      <p className="max-w-2xl text-lg text-text-secondary mb-8 text-center">
        FlutterFlow empowers you to build cross-platform mobile apps visually, leveraging the power of Flutter. Ideal for rapid prototyping and launching production-ready apps without code.
      </p>
      <div className="w-full max-w-3xl bg-card rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-2 text-accent">Key Features</h2>
        <ul className="list-disc pl-6 text-text-secondary">
          <li>Visual UI builder for Flutter</li>
          <li>Firebase integration</li>
          <li>Custom actions and logic</li>
          <li>Real-time previews</li>
          <li>Export clean Flutter code</li>
        </ul>
      </div>
      <a href="https://flutterflow.io" target="_blank" rel="noopener" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-accent transition">Explore FlutterFlow</a>
    </div>
  );
}
