import React from "react";

const tools = [
  {
    name: "Webflow",
    url: "https://webflow.com",
    description: "Design, build, and launch responsive websites visually."
  },
  {
    name: "Softr",
    url: "https://softr.io",
    description: "Create powerful web apps and portals from Airtable, no code required."
  },
  {
    name: "Adalo",
    url: "https://adalo.com",
    description: "Build native mobile apps visually and publish to app stores."
  },
  {
    name: "Glide",
    url: "https://glideapps.com",
    description: "Turn spreadsheets into beautiful mobile apps instantly."
  },
  {
    name: "Bravo Studio",
    url: "https://www.bravostudio.com",
    description: "Create native mobile apps from Figma designs, no code needed."
  }
];

export default function TrendingNoCodeTools() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFD700]/10 via-[#22D3EE]/10 to-[#fff]/10 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-secondary mb-4">Trending No-Code Tools</h1>
      <p className="max-w-2xl text-lg text-text-secondary mb-8 text-center">
        Explore the latest and most popular no-code platforms for building websites, apps, and automations without writing code.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {tools.map(tool => (
          <div key={tool.name} className="bg-card rounded-xl shadow-lg p-6 flex flex-col items-start">
            <h2 className="text-2xl font-bold text-accent mb-2">{tool.name}</h2>
            <p className="text-text-secondary mb-4">{tool.description}</p>
            <a href={tool.url} target="_blank" rel="noopener" className="px-4 py-2 bg-accent text-white rounded font-semibold shadow hover:bg-primary transition">Visit {tool.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
